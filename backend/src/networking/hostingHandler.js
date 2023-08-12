/* eslint-disable no-restricted-syntax */
const GateSync = require("../networking/gateSync");

class HostingHandler {
  static isHostPresent(users, planetName) {
    return users
      .filter((user) => user.currentPlanet === planetName)
      .some((user) => user.hosting === planetName);
  }

  static noHostPresent(io, socket, planetName) {
    const [gateOffworld] = GateSync.getBusyGates()
      .filter((links) => links.inbound === planetName)
      .map((link) => link);

    if (gateOffworld) {
      io.to(socket.id).emit(
        "offworldSequence",
        gateOffworld.state,
        gateOffworld.chevLocked
      );
    }
  }

  static getPlanetHost(users, planetName) {
    return users?.filter((clientHost) => clientHost.hosting === planetName);
  }

  static handleDisconnect(io, userPlanet) {
    const busyGates = GateSync.getBusyGates();

    const [isGateActive] = busyGates
      .filter(
        (link) => link.outbound === userPlanet || link.inbound === userPlanet
      )
      .map((link) => link);

    if (isGateActive && isGateActive.outbound === userPlanet) {
      console.log("######################");
      console.log("Gate link active but no user left on planet, closing gates");
      io.to(isGateActive.inbound).emit("closeGate", isGateActive.state);
      io.to(isGateActive.outbound).emit("closeGate", isGateActive.state);

      const gates = busyGates.findIndex(
        (link) =>
          link.outbound === isGateActive.outbound &&
          link.inbound === isGateActive.inbound
      );

      GateSync.busyGatesSplice(gates);
      console.log("Gate link removed from busy gates : ");
      console.log(`[${isGateActive.outbound} - ${isGateActive.inbound}]`);
      console.table(busyGates);
    }
  }
}

module.exports = HostingHandler;
