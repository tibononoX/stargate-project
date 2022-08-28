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

io.on("connect", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("inputUpdate", (data) => {
    console.log(data);
    io.emit("inputUpdate", data);
  });

  socket.on("destLock", (data) => {
    if (!data) {
      console.log("error retrieving socket");
    }
    io.emit("offworld", data);
  });

  socket.on("close", (data) => {
    if (!data) {
      console.log("error retrieving socket");
    }
    io.emit("close", data);
  });
});
