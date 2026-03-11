/* eslint-disable no-restricted-syntax */
const GateSync = require("../networking/gateSync");

class HostingHandler {
  static isHostPresent(users, planetName) {
    return users.some(
      (user) => user.currentPlanet === planetName && user.hosting === planetName
    );
  }

  static noHostPresent(io, socket, planetName) {
    const gateOffworld = GateSync.getBusyGates().find(
      (link) => link.inbound === planetName
    );

    if (gateOffworld) {
      io.to(socket.id).emit(
        "offworldSequence",
        gateOffworld.state,
        gateOffworld.chevLocked
      );
    }
  }

  static getPlanetHost(users, planetName) {
    return users?.filter((user) => user.hosting === planetName);
  }

  static handleDisconnect(io, userPlanet) {
    const busyGates = GateSync.getBusyGates();

    const isGateActive = busyGates.find(
      (link) => link.outbound === userPlanet || link.inbound === userPlanet
    );

    if (isGateActive && isGateActive.outbound === userPlanet) {
      console.log("Gate link active but no user left on planet, closing gates");
      io.to(isGateActive.inbound).emit("closeGate", isGateActive.state);
      io.to(isGateActive.outbound).emit("closeGate", isGateActive.state);

      const gateIndex = busyGates.findIndex(
        (link) =>
          link.outbound === isGateActive.outbound &&
          link.inbound === isGateActive.inbound
      );
      GateSync.busyGatesSplice(gateIndex);
      console.log(
        `Gate link removed: [${isGateActive.outbound} - ${isGateActive.inbound}]`
      );
    }
  }
}

module.exports = HostingHandler;
