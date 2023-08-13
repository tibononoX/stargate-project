/* eslint-disable no-restricted-syntax */

const busyGates = [];
const blockedGates = [];

class GateSync {
  static getBusyGates() {
    return busyGates;
  }

  static busyGatesSplice(gates) {
    return busyGates.splice(gates, 1);
  }

  static sendGateStatus(socket, clientId, gateState) {
    return socket.to(clientId).emit("newGateState", gateState);
  }

  static newInput(socket, planetName, inputAddress) {
    return socket.to(planetName).emit("newInput", inputAddress);
  }

  static lastChev(socket, planetName, poo) {
    return socket.to(planetName).emit("lastChev", poo);
  }

  static destinationInfo(socket, planetName, destination) {
    return socket.to(planetName).emit("destinationInfo", destination);
  }

  static lockFail(socket, planetName, poo) {
    return socket.to(planetName).emit("lockFail", { poo });
  }

  static wrongAddress(socket, planetName, straight = false) {
    if (straight) {
      return socket.to(planetName).emit("wrongAddressStraight");
    }
    return socket.to(planetName).emit("wrongAddress");
  }

  static playerTravels(io, socket, planetName, destinationName) {
    socket.to(planetName).emit("playerTravels");
    socket.to(destinationName).emit("playerTravels");
    return io.emit("updateUserList");
  }

  static playerHit(socket, destinationName) {
    return socket.to(destinationName).emit("playerHit");
  }

  static isGateBusy(planetName, destinationName) {
    const gateBusy = busyGates.some((links) => {
      if (
        (links.outbound === planetName && links.inbound === destinationName) ||
        ((links.outbound === destinationName ||
          links.inbound === destinationName) &&
          links.state === "dialing")
      ) {
        return false;
      }
      return (
        links.outbound === destinationName || links.inbound === destinationName
      );
    });
    return gateBusy;
  }

  static isGateBlocked(destinationName) {
    const gateBlocked = blockedGates.some((entry) => entry === destinationName);
    return gateBlocked;
  }

  static gateAutoReset(socket, planetName, destinationName) {
    const gates = busyGates.findIndex((link) => link.outbound === planetName);
    if (!gates) {
      return socket.to(destinationName).emit("wrongAddress");
    }

    busyGates.splice(gates, 1);
    console.log("######################");
    console.log("Gate link removed from busy gates : ");
    console.log(`[${planetName} - ${destinationName}]`);
    console.table(busyGates);
    socket.to(planetName).emit("wrongAddress");
    return socket.to(destinationName).emit("wrongAddress");
  }

  static offworldFail(socket, planetName, destinationName) {
    if (
      busyGates.some(
        (links) =>
          (links.outbound === destinationName && links.state !== "dialing") ||
          (links.inbound === destinationName &&
            links.outbound !== planetName &&
            links.state !== "dialing")
      )
    ) {
      console.log(`${destinationName} is busy, stopping offworld fail event`);
      return null;
    }

    const gates = busyGates.findIndex(
      (link) => link.inbound === destinationName
    );
    busyGates.splice(gates, 1);

    return socket.to(destinationName).emit("wrongAddressStraight", true);
  }

  static offworldChev(socket, planetName, destinationName, chevLocked) {
    if (
      busyGates.some(
        (links) =>
          links.outbound === destinationName ||
          (links.inbound === destinationName && links.outbound !== planetName)
      )
    ) {
      console.log(
        `${destinationName} is busy, stopping offworld event registration`
      );
      return null;
    }

    if (
      !busyGates.some(
        (links) =>
          links.outbound === planetName && links.inbound === destinationName
      )
    ) {
      busyGates.push({
        outbound: planetName,
        inbound: destinationName,
        chevLocked,
        state: "dialing",
      });
      console.log("######################");
      console.log("New gate link added to busy gates : ");
      console.log(`[${planetName} - ${destinationName}]`);
      console.table(busyGates);
    }

    const gates = busyGates.findIndex(
      (link) => link.outbound === planetName && link.inbound === destinationName
    );
    busyGates[gates] = { ...busyGates[gates], chevLocked };

    return socket
      .to(busyGates[gates].inbound)
      .emit("offworldSequence", busyGates[gates].state, chevLocked);
  }

  static destLock(io, socket, planetName, destinationName) {
    if (
      busyGates.some(
        (links) =>
          (links.outbound === destinationName && links.state === "dialing") ||
          (links.inbound === destinationName && links.state === "dialing")
      )
    ) {
      const gates = busyGates.filter(
        (link) =>
          (link.outbound === destinationName && link.state === "dialing") ||
          (link.inbound === destinationName &&
            link.outbound !== planetName &&
            link.state === "dialing")
      );

      gates.forEach((link) => {
        const gatesIndex = busyGates.findIndex(
          (busyLink) =>
            busyLink.outbound === link.outbound &&
            busyLink.inbound === link.inbound
        );
        busyGates.splice(gatesIndex, 1);
      });
    }

    const gates = busyGates.findIndex(
      (link) => link.outbound === planetName && link.inbound === destinationName
    );
    busyGates[gates] = { ...busyGates[gates], chevLocked: 7, state: "locked" };

    socket.to(planetName).emit("destLock");
    socket
      .to(destinationName)
      .emit("offworldSequence", busyGates[gates].state, 6);
  }

  static openGate(io, socket, currentClient, planetName, destinationName) {
    if (!planetName || !destinationName) {
      return null;
    }

    const gates = busyGates.findIndex(
      (link) => link.outbound === planetName && link.inbound === destinationName
    );

    busyGates[gates] = { ...busyGates[gates], state: "open" };

    console.log(
      `${currentClient?.username} triggers gate opening from ${planetName} to ${destinationName}`
    );

    socket.to(planetName).emit("openGate");
    return socket.to(destinationName).emit("openGate");
  }

  static closeGate(io, socket, currentClient, planetName, destinationName) {
    if (!planetName || !destinationName) {
      return null;
    }

    const gates = busyGates.findIndex(
      (link) => link.outbound === planetName && link.inbound === destinationName
    );

    busyGates.splice(gates, 1);
    console.log("######################");
    console.log("Gate link removed from busy gates : ");
    console.log(`[${planetName} - ${destinationName}]`);
    console.table(busyGates);

    console.log(
      `${currentClient?.username} triggers gate closing from ${planetName} to ${destinationName}`
    );

    socket.to(planetName).emit("closeGate");
    return socket.to(destinationName).emit("closeGate");
  }

  static handleIrisState(socket, planetName, newIrisState) {
    if (!newIrisState) {
      const alreadyIn = blockedGates.find((entry) => entry === planetName);
      if (alreadyIn) {
        return socket.to(planetName).emit("updateIris", newIrisState);
      }
      blockedGates.push(planetName);
    }
    if (newIrisState) {
      const alreadyIn = blockedGates.find((entry) => entry === planetName);
      if (!alreadyIn) {
        return socket.to(planetName).emit("updateIris", newIrisState);
      }
      blockedGates.pop(planetName);
    }
    return socket.to(planetName).emit("updateIris", newIrisState);
  }
}

module.exports = GateSync;
