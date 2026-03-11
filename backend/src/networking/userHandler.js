/* eslint-disable no-restricted-syntax */
const HostingHandler = require("../networking/hostingHandler");
const GateSync = require("../networking/gateSync");

let users = [];

class UserHandler {
  static fetchUsers(cb) {
    return cb(users);
  }

  static logUserList(newUser, disconnect) {
    console.log("######################");

    if (users.length === 0) {
      return console.log("No user connected");
    }
    if (newUser && disconnect) {
      return console.log(newUser, "left server");
    }
    if (newUser && !disconnect) {
      console.log(newUser, "joined server");
    }

    console.log(
      `${users.length} user${users.length === 1 ? "" : "s"} connected :`
    );
    return console.table(users);
  }

  static getUserBySocket(socket) {
    return users.find((client) => client.id === socket.id);
  }

  static getUserIndexBySocket(socket) {
    const index = users.findIndex((person) => person.id === socket.id);
    return index;
  }

  static joinServer(io, socket, username, currentPlanet) {
    const user = {
      username,
      id: socket.id,
      currentPlanet,
    };
    if (users.some((client) => client.id === socket.id)) {
      const indexOfUser = users.findIndex((client) => client.id === socket.id);
      users.splice(indexOfUser);
    }
    users.push(user);
    io.emit("user connected", users, user);
  }

  static joinPlanet(io, socket, planetName, initial, cb) {
    socket.join(planetName);
    const isHostPresent = HostingHandler.isHostPresent(users, planetName);
    const userIndex = this.getUserIndexBySocket(socket);
    users[userIndex] = { ...users[userIndex], currentPlanet: planetName };
    const user = this.getUserBySocket(socket);

    if (!isHostPresent) {
      HostingHandler.noHostPresent(io, socket, planetName);
      users[userIndex] = { ...users[userIndex], hosting: planetName };
      cb(planetName);
    }

    if (isHostPresent && initial) {
      const savedState = GateSync.getGateState(planetName);
      if (savedState) {
        // Fast path: server has a cached snapshot, send it directly
        socket.emit("newGateState", savedState);
      } else {
        // Fallback: ask the current host to send their state
        const [host] = HostingHandler.getPlanetHost(users, planetName);
        socket.to(host.id).emit("getGateState", socket.id);
      }
    }

    io.in(planetName).emit(
      "user join",
      { user: user?.username, planet: planetName },
      users
    );
    this.logUserList(user.username, false);
  }

  static leavePlanet(io, socket, planetName, destinationName) {
    socket.leave(planetName);
    const userIndex = users.findIndex((person) => person.id === socket.id);
    users[userIndex] = { ...users[userIndex], currentPlanet: destinationName };
    delete users[userIndex].hosting;

    const otherUsers = users.filter(
      (client) => client.currentPlanet === planetName
    );

    if (otherUsers.length === 0) {
      const busyGates = GateSync.getBusyGates();
      const isGateOpen = busyGates.find(
        (link) => link.outbound === planetName || link.inbound === planetName
      );

      if (isGateOpen && isGateOpen.outbound === planetName) {
        io.to(isGateOpen.outbound).emit("closeGate");

        const gateIndex = busyGates.findIndex(
          (link) =>
            link.outbound === isGateOpen.outbound &&
            link.inbound === isGateOpen.inbound
        );
        busyGates.splice(gateIndex, 1);
        console.log(
          `Gate auto-closed (planet empty): [${planetName} - ${destinationName}]`
        );
      }
      GateSync.clearGateState(planetName);
    }

    io.in(planetName).emit(
      "user left",
      { user: this.getUserBySocket(socket)?.username, planet: planetName },
      users
    );
  }

  static disconnect(io, socket) {
    const user = this.getUserBySocket(socket);
    socket.leave(user?.currentPlanet);
    users = users.filter((client) => client.id !== socket.id);

    const otherUserOnPlanet = users.filter(
      (client) => client.currentPlanet === user?.currentPlanet
    );

    if (otherUserOnPlanet.length === 0) {
      HostingHandler.handleDisconnect(io, user?.currentPlanet);
      GateSync.clearGateState(user?.currentPlanet);
    }
    if (otherUserOnPlanet.length >= 1) {
      const newHostIndex = users.findIndex(
        (client) => client.currentPlanet === user.currentPlanet
      );
      users[newHostIndex] = {
        ...users[newHostIndex],
        hosting: users[newHostIndex].currentPlanet,
      };
    }

    io.emit("user disconnected", users, user);
    this.logUserList(user?.username, true);
  }
}

module.exports = UserHandler;
