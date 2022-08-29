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
  console.log(io.sockets.adapter.rooms);

  socket.on("joinServer", (username) => {
    const user = {
      username,
      id: socket.id,
    };
    users.push(user);
  });

  socket.on("join planet", (planetName) => {
    socket.join(planetName);
  });
  socket.on("leave planet", (planetName) => {
    socket.leave(planetName);
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
