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
const { main } = require("./src/networking/main");
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.FRONTEND_URL.split(",") ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  },
});

io.on("connection", (socket) => main(socket, io));
