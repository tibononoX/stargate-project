/* eslint-disable no-restricted-syntax */
const UserHandler = require("../networking/userHandler");
const Chat = require("../networking/chat");
const GateSync = require("../networking/gateSync");

function main(socket, io) {
  const getUser = () => UserHandler.getUserBySocket(socket);

  const chatInfo = (message, channel) =>
    Chat.newChatMessage(io, {
      type: "info",
      username: "Server",
      message,
      ...(channel && { channel }),
    });

  const chatAlert = (channel, message) =>
    Chat.newChatMessage(io, {
      type: "alert",
      channel,
      username: "Server",
      message,
    });

  // --- CONNECTION ---

  socket.on("disconnect", () => {
    const user = getUser();
    UserHandler.disconnect(io, socket);
    chatInfo(
      `${user?.username} left ${user?.currentPlanet}`,
      user?.currentPlanet
    );
    chatInfo(`${user?.username} disconnected`);
  });

  socket.on("joinServer", ({ username, currentPlanet }) => {
    UserHandler.joinServer(io, socket, username, currentPlanet);
    chatInfo(`${getUser()?.username} connected`);
  });

  socket.on("newPlanetRegistered", () => {
    console.log("A new planet has been added to the database");
    io.emit("fetchAddressList");
  });

  // --- PLANET NAVIGATION ---

  socket.on("join planet", (planetName, initial, cb) => {
    UserHandler.joinPlanet(io, socket, planetName, initial, cb);
    chatInfo(`${getUser()?.username} joined ${planetName}`, planetName);
  });

  socket.on("leave planet", (planetName, destinationName) => {
    UserHandler.leavePlanet(io, socket, planetName, destinationName);
    chatInfo(`${getUser()?.username} left ${planetName}`, planetName);
  });

  socket.on("fetchUsers", (cb) => {
    UserHandler.fetchUsers(cb);
  });

  // --- GATE SYNC ---

  socket.on("playerTravels", ({ planetName, destinationName }) => {
    GateSync.playerTravels(io, socket, planetName, destinationName);
  });

  socket.on("playerHit", ({ destinationName }) => {
    GateSync.playerHit(socket, destinationName);
  });

  socket.on("sendGateStatus", (clientId, gateState) => {
    GateSync.sendGateStatus(socket, clientId, gateState);
  });

  socket.on("updateGateState", ({ planetName, gateState }) => {
    GateSync.setGateState(planetName, gateState);
  });

  socket.on("isGateBusy", (planetName, destinationName, cb) => {
    cb(GateSync.isGateBusy(planetName, destinationName));
  });

  socket.on("isGateBlocked", (destinationName, cb) => {
    cb(GateSync.isGateBlocked(destinationName));
  });

  socket.on("handleIrisState", ({ planetName, newIrisState }) => {
    GateSync.handleIrisState(socket, planetName, newIrisState);
  });

  socket.on("newInput", ({ planetName, inputAddress }) => {
    GateSync.newInput(socket, planetName, inputAddress);
  });

  socket.on("autoDial", ({ planetName, sequence }) => {
    GateSync.autoDial(socket, planetName, sequence);
  });

  socket.on("aborting", ({ planetName }) => {
    GateSync.aborting(socket, planetName);
  });

  socket.on("lastChev", ({ planetName, poo }) => {
    GateSync.lastChev(socket, planetName, poo);
  });

  socket.on("destinationInfo", ({ planetName, destination }) => {
    GateSync.destinationInfo(socket, planetName, destination);
  });

  socket.on("lockFail", ({ planetName, poo }) => {
    GateSync.lockFail(socket, planetName, poo);
  });

  socket.on("wrongAddress", ({ planetName }) => {
    GateSync.wrongAddress(socket, planetName);
  });

  socket.on("wrongAddressStraight", ({ planetName }) => {
    GateSync.wrongAddress(socket, planetName, true);
  });

  socket.on("offworldFail", (planetName, destinationName) =>
    GateSync.offworldFail(socket, planetName, destinationName)
  );

  socket.on("gateAutoReset", ({ planetName, destinationName }) => {
    GateSync.gateAutoReset(socket, planetName, destinationName);
  });

  socket.on("offworldChev", ({ planetName, destinationName, chevLocked }) =>
    GateSync.offworldChev(socket, planetName, destinationName, chevLocked)
  );

  // --- WORMHOLE ---

  socket.on("openGate", ({ planetName, destinationName }) => {
    const user = getUser();
    GateSync.openGate(io, socket, user, planetName, destinationName);
    chatAlert(
      planetName,
      `${user?.username} opened wormhole to ${destinationName}`
    );
  });

  socket.on("closeGate", ({ planetName, destinationName }) => {
    const user = getUser();
    GateSync.closeGate(io, socket, user, planetName, destinationName);
    chatAlert(
      planetName,
      `${user?.username} closed wormhole to ${destinationName}`
    );
    chatAlert(destinationName, "Offworld vortex closing");
  });

  socket.on("destLock", ({ planetName, destinationName }) => {
    GateSync.destLock(io, socket, planetName, destinationName);
    chatAlert(destinationName, "Incoming offworld activation !");
  });

  // --- CHAT ---

  socket.on("getMessages", (cb) => {
    cb(Chat.getMessages());
  });

  socket.on("newChatMessage", ({ channel, username, message }) =>
    Chat.newChatMessage(io, { type: "message", channel, username, message })
  );
}

module.exports = { main };
