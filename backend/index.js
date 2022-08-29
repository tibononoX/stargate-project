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

  socket.on("disconnect", () => {
    users = users.filter((user) => user.id !== socket.id);
  });

  socket.on("newInput", ({ planetName, inputAddress }) => {
    socket.to(planetName).emit("newInput", inputAddress);
  });

  socket.on("lastChev", ({ planetName, poo }) => {
    socket.to(planetName).emit("lastChev", poo);
  });

  socket.on("destinationInfo", ({ planetName, destination }) => {
    socket.to(planetName).emit("destinationInfo", destination);
  });

  socket.on("lockFail", ({ planetName, poo }) => {
    socket.to(planetName).emit("lockFail", { poo });
  });

  socket.on("wrongAddress", ({ planetName }) => {
    socket.to(planetName).emit("wrongAddress");
  });

  socket.on("dhdCloseGate", ({ planetName, destinationName }) => {
    socket.to(planetName).emit("dhdCloseGate");
    socket.to(destinationName).emit("offworldClose");
  });

  socket.on("openGate", ({ planetName, destinationName }) => {
    const currentClient = users.filter((client) => client.id === socket.id);
    console.log(
      `${currentClient[0].username} triggers gate opening from ${planetName} to ${destinationName}`
    );
    if (!planetName || !destinationName) {
      return null;
    }
    socket.to(planetName).emit("openGate");
    socket.to(destinationName).emit("openGate");
  });

  socket.on("closeGate", ({ planetName, destinationName }) => {
    const currentClient = users.filter((client) => client.id === socket.id);
    console.log(
      `${currentClient[0].username} triggers gate closing from ${planetName} to ${destinationName}`
    );

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
