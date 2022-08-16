require("dotenv").config();
// const uniqid = require("uniqid");

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

io.on("connect", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("inputUpdate", (inputAddress) => {
    // console.log(inputAddress);
    io.emit("inputUpdate", inputAddress);
  });

  socket.on("setPooActive", (dhdSymbol) => {
    io.emit("setPooActive", dhdSymbol);
  });

  socket.on("checkMatch", (dhdSymbol) => {
    io.emit("checkMatch", dhdSymbol);
  });

  socket.on("wrongAddress", (id) => {
    console.log("wrong address", id);
    io.emit("wrongAddress", id);
  });

  socket.on("openGate", (id) => {
    console.log("open gate", id);

    io.emit("openGate", id);
  });

  socket.on("closeGate", (id) => {
    console.log("close gate", id);
    io.emit("closeGate", id);
  });

  socket.on("closeOff", (data) => {
    if (!data) {
      console.log("error retrieving socket");
    }
    io.emit("closeOff", data);
  });
});
