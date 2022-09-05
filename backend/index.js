/* eslint-disable no-restricted-syntax */
require("dotenv").config();
const uniqid = require("uniqid");

const message = {
  id: uniqid(),
  author: "server",
  text: "Stargate React",
};

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
const gateStates = [];

io.on("connection", (socket) => {
  socket.on("joinServer", (username) => {
    const user = {
      username,
      id: socket.id,
    };
    users.push(user);
  });

  socket.on("join planet", (planetName) => {
    socket.join(planetName);
    const user = users.filter((client) => client.id === socket.id);
    io.in(planetName).emit("user join", {
      user: user[0]?.username,
      planet: planetName,
    });
  });
  socket.on("leave planet", (planetName) => {
    socket.leave(planetName);
    const user = users.filter((client) => client.id === socket.id);
    io.in(planetName).emit("user left", {
      user: user[0]?.username,
      planet: planetName,
    });
  });

  socket.on("playerTravels", ({ planetName, destinationName }) => {
    io.to(planetName).emit("playerTravels");
    io.to(destinationName).emit("playerTravels");
  });

  socket.on("disconnect", () => {
    users = users.filter((user) => user.id !== socket.id);
  });

  socket.on("newInput", ({ planetName, inputAddress }) => {
    const gateListed = gateStates.filter(
      (gate) => gate.planetName === planetName
    ).length;
    if (!gateListed) {
      const gateStatus = {
        planetName,
        currentInputs: inputAddress,
        isLocked: false,
        offworld: false,
        isOpen: false,
      };
      gateStates.push(gateStatus);
      console.log(gateStates.length);

      return socket.to(planetName).emit("newInput", inputAddress);
    }
    const inbound = gateStates.findIndex(
      (gate) => gate.planetName === planetName
    );

    gateStates[inbound] = {
      ...gateStates[inbound],
      currentInputs: inputAddress,
    };
    console.log(gateStates.length);

    return socket.to(planetName).emit("newInput", inputAddress);
  });

  socket.on("lastChev", ({ planetName, poo }) => {
    socket.to(planetName).emit("lastChev", poo);
  });

  socket.on("destinationInfo", ({ planetName, destination }) => {
    const gateListed = gateStates.filter(
      (gate) => gate.planetName === destination.planetName
    ).length;
    if (!gateListed) {
      const gateStatus = {
        planetName: destination.planetName,
        currentInputs: null,
        isLocked: false,
        offworld: true,
        isOpen: false,
      };
      console.log(gateStates.length);

      return gateStates.push(gateStatus);
    }
    console.log(gateStates.length);

    return socket.to(planetName).emit("destinationInfo", destination);
  });

  socket.on("lockFail", ({ planetName, poo }) => {
    socket.to(planetName).emit("lockFail", { poo });
  });

  socket.on("wrongAddress", ({ planetName }) => {
    const inbound = gateStates.findIndex(
      (gate) => gate.planetName === planetName
    );
    gateStates.splice(inbound);
    console.log(gateStates.length);

    socket.to(planetName).emit("wrongAddress");
  });

  socket.on("dhdCloseGate", ({ planetName, destinationName }) => {
    socket.to(planetName).emit("dhdCloseGate");
    socket.to(destinationName).emit("offworldClose");
  });

  socket.on("openGate", ({ planetName, destinationName }) => {
    const currentClient = users.filter((client) => client.id === socket.id);
    console.log(currentClient);
    console.log(
      `${currentClient[0].username} triggers gate opening from ${planetName} to ${destinationName}`
    );
    if (!planetName || !destinationName) {
      return null;
    }

    const inbound = gateStates.findIndex(
      (gate) => gate.planetName === planetName
    );
    const outbound = gateStates.findIndex(
      (gate) => gate.planetName === destinationName
    );

    gateStates[inbound] = { ...gateStates[inbound], isOpen: true };
    gateStates[outbound] = { ...gateStates[outbound], isOpen: true };
    console.log(gateStates);
    socket.to(planetName).emit("openGate");
    return socket.to(destinationName).emit("openGate");
  });

  socket.on("closeGate", ({ planetName, destinationName }) => {
    const currentClient = users.filter((client) => client.id === socket.id);
    console.log(
      `${currentClient[0].username} triggers gate closing from ${planetName} to ${destinationName}`
    );

    const inbound = gateStates.findIndex(
      (gate) => gate.planetName === planetName
    );
    gateStates.splice(inbound);

    const outbound = gateStates.findIndex(
      (gate) => gate.planetName === destinationName
    );
    gateStates.splice(outbound);

    console.log(gateStates, gateStates.length);

    socket.to(planetName).emit("closeGate");
    socket.to(destinationName).emit("closeGate");
  });

  socket.on("dhdOpenGate", ({ planetName, destinationName }) => {
    socket.to(planetName).emit("dhdOpenGate");
    socket.to(planetName).emit("openGate");
    console.log(destinationName);
    socket.to(destinationName).emit("offworldOpen");
  });

  socket.on("destLock", ({ planetName, destinationName }) => {
    const inbound = gateStates.findIndex(
      (gate) => gate.planetName === planetName
    );
    console.log("inbound:", inbound);
    const outbound = gateStates.findIndex(
      (gate) => gate.planetName === destinationName
    );
    console.log("outbound:", outbound);
    gateStates[inbound] = { ...gateStates[inbound], isLocked: true };
    gateStates[outbound] = { ...gateStates[outbound], isLocked: true };
    socket.to(planetName).emit("destLock");
    socket.to(destinationName).emit("offworldLock");
  });

  socket.on("close", (data) => {
    if (!data) {
      console.log("error retrieving socket");
    }
    io.emit("close", data);
  });
});
