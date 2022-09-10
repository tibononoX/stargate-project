/* eslint-disable no-restricted-syntax */
require("dotenv").config();
const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

const server = app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});

// Online functionalities
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.FRONTEND_URL.split(",") ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  },
});

let users = [];
let busyGates = [];

function cleanBusyGates() {
  console.log(
    "1 minute since last clean check, starting busy gates cleaning..."
  );

  if (busyGates.length === 0) {
    console.log("No gate links active, aborting");
    return setTimeout(cleanBusyGates, 60000);
  }

  if (users.length === 0) {
    console.log("No user connected, resetting busy gates states...");
    busyGates = [];
    return setTimeout(cleanBusyGates, 60000);
  }

  console.log("Cleaning busy gates...");
  console.log("Current list: ");
  console.table(busyGates);
  const clearedList = [];
  busyGates.forEach((links) => {
    if (
      users.some(
        (user) => user.currentPlanet === links.outbound || links.inbound
      )
    ) {
      console.log(`Keeping [${links.outbound} - ${links.inbound}]`);
      return clearedList.push(links);
    }
    console.log(`Cleaning [${links.outbound} - ${links.inbound}]`);
    return null;
  });

  busyGates = clearedList;
  console.log("Cleaned list: ");
  console.table(busyGates);
  return setTimeout(cleanBusyGates, 10000);
}

function userList() {
  if (users.length === 0) {
    console.log("No user connected");
    return setTimeout(userList, 60000);
  }
  console.log(
    `${users.length} user${users.length === 1 ? "" : "s"} connected :`
  );
  console.table(users);
  return setTimeout(userList, 60000);
}
userList();
cleanBusyGates();

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    const [user] = users.filter((client) => client.id === socket.id);
    const userPlanet = user?.currentPlanet;
    socket.leave(user?.currentPlanet);

    console.log(user?.username, "left server");
    users = users
      .filter((client) => client.id !== socket.id)
      .map((newusers) => newusers);

    const otherUser = users.filter(
      (client) => client.currentPlanet === user?.currentPlanet
    );

    if (otherUser.length === 0) {
      const [isGateOpen] = busyGates
        .filter(
          (link) => link.outbound === userPlanet || link.inbound === userPlanet
        )
        .map((link) => link);

      if (isGateOpen && isGateOpen.outbound === userPlanet) {
        io.to(isGateOpen.inbound).emit("closeGate");
        io.to(isGateOpen.outbound).emit("closeGate");

        const gates = busyGates.findIndex(
          (link) =>
            link.outbound === isGateOpen.outbound &&
            link.inbound === isGateOpen.inbound
        );

        busyGates.splice(gates);
      }
    }

    if (otherUser.length >= 1) {
      users[0] = { ...users[0], hosting: users[0].currentPlanet };
    }

    io.emit("user disconnected", users, user);
  });

  socket.on("joinServer", ({ username, currentPlanet }) => {
    const user = {
      username,
      id: socket.id,
      currentPlanet,
    };
    if (users.filter((client) => client.id === socket.id).length !== 0) {
      const indexOfUser = users.findIndex((client) => client.id === socket.id);
      users.splice(indexOfUser);
    }
    users.push(user);
    console.log(user.username, "joined server");

    io.emit("user connected", users, user);
  });

  socket.on("join planet", (planetName, initial, cb) => {
    socket.join(planetName);
    const isHostPresent = users
      .filter((user) => user.currentPlanet === planetName)
      .some((user) => user.hosting === planetName);

    const userIndex = users.findIndex((person) => person.id === socket.id);
    users[userIndex] = { ...users[userIndex], currentPlanet: planetName };
    const user = users.filter((client) => client.id === socket.id);

    if (!isHostPresent) {
      const [gateOffworld] = busyGates
        .filter((links) => links.inbound === planetName)
        .map((link) => link);

      if (gateOffworld) {
        io.to(socket.id).emit("offworldLock", gateOffworld.state, true);
      }

      users[userIndex] = { ...users[userIndex], hosting: planetName };
      cb(planetName);
    }

    if (isHostPresent && initial) {
      console.log("initial load");
      const [host] = users.filter(
        (clientHost) => clientHost.hosting === planetName
      );
      socket.to(host.id).emit("getGateState", socket.id);
    }

    io.in(planetName).emit(
      "user join",
      {
        user: user[0]?.username,
        planet: planetName,
      },
      users
    );
  });

  socket.on("leave planet", (planetName, destinationName) => {
    socket.leave(planetName);
    const userIndex = users.findIndex((person) => person.id === socket.id);
    users[userIndex] = { ...users[userIndex], currentPlanet: destinationName };
    delete users[userIndex].hosting;

    const otherUser = users.filter(
      (client) => client.currentPlanet === planetName
    );

    if (otherUser.length === 0) {
      const [isGateOpen] = busyGates
        .filter(
          (link) => link.outbound === planetName || link.inbound === planetName
        )
        .map((link) => link);

      if (isGateOpen && isGateOpen.outbound === planetName) {
        io.to(isGateOpen.outbound).emit("closeGate");

        const gates = busyGates.findIndex(
          (link) =>
            link.outbound === isGateOpen.outbound &&
            link.inbound === isGateOpen.inbound
        );

        busyGates.splice(gates);
      }
    }

    const user = users.filter((client) => client.id === socket.id);
    io.in(planetName).emit(
      "user left",
      {
        user: user[0]?.username,
        planet: planetName,
      },
      users
    );
  });

  socket.on("fetchUsers", (cb) => {
    cb(users);
  });

  socket.on("playerTravels", ({ planetName, destinationName }) => {
    socket.to(planetName).emit("playerTravels");
    socket.to(destinationName).emit("playerTravels");
  });

  socket.on("sendGateStatus", (clientId, gateState) => {
    socket.to(clientId).emit("newGateState", gateState);
  });

  socket.on("isGateBusy", (planetName, destinationName, cb) => {
    const gateBusy = busyGates.some((links) => {
      if (links.outbound === planetName && links.inbound === destinationName) {
        return false;
      }
      return (
        links.outbound === destinationName || links.inbound === destinationName
      );
    });

    cb(gateBusy);
  });

  socket.on("newInput", ({ planetName, inputAddress }) => {
    return socket.to(planetName).emit("newInput", inputAddress);
  });

  socket.on("lastChev", ({ planetName, poo }) => {
    socket.to(planetName).emit("lastChev", poo);
  });

  socket.on("destinationInfo", ({ planetName, destination }) => {
    return socket.to(planetName).emit("destinationInfo", destination);
  });

  socket.on("lockFail", ({ planetName, poo }) => {
    socket.to(planetName).emit("lockFail", { poo });
  });

  socket.on("wrongAddress", ({ planetName }) => {
    socket.to(planetName).emit("wrongAddress");
  });

  socket.on("wrongAddressStraight", ({ planetName }) => {
    socket.to(planetName).emit("wrongAddressStraight");
  });

  socket.on("gateAutoReset", ({ planetName, destinationName }) => {
    const gates = busyGates.findIndex(
      (link) => link.outbound === planetName && link.inbound === destinationName
    );

    busyGates.splice(gates);
    socket.to(planetName).emit("wrongAddress");
    socket.to(destinationName).emit("wrongAddress");
  });

  socket.on("openGate", ({ planetName, destinationName }) => {
    const currentClient = users.filter((client) => client.id === socket.id);
    console.log(
      `${currentClient[0]?.username} triggers gate opening from ${planetName} to ${destinationName}`
    );
    if (!planetName || !destinationName) {
      return null;
    }

    const gates = busyGates.findIndex(
      (link) => link.outbound === planetName && link.inbound === destinationName
    );

    busyGates[gates] = { ...busyGates[gates], state: "open" };

    socket.to(planetName).emit("openGate");
    return socket.to(destinationName).emit("openGate");
  });

  socket.on("closeGate", ({ planetName, destinationName }) => {
    const currentClient = users.filter((client) => client.id === socket.id);
    console.log(
      `${currentClient[0]?.username} triggers gate closing from ${planetName} to ${destinationName}`
    );
    if (!planetName || !destinationName) {
      return null;
    }

    const gates = busyGates.findIndex(
      (link) => link.outbound === planetName && link.inbound === destinationName
    );

    busyGates.splice(gates);

    socket.to(planetName).emit("closeGate");
    return socket.to(destinationName).emit("closeGate");
  });

  socket.on("destLock", ({ planetName, destinationName }) => {
    busyGates.push({
      outbound: planetName,
      inbound: destinationName,
      state: "closed",
    });

    socket.to(planetName).emit("destLock");
    socket.to(destinationName).emit("offworldLock");
  });
});
