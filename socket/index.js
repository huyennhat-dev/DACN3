const express = require("express");
const http = require("http");

const socketIo = require("socket.io").Server;

const app = express(); // Tạo ứng dụng Express
const server = http.createServer(app);

const io = new socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  },
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("new-notify", (newNotify) => {
    console.log("New notification:", newNotify);
    socket.broadcast.emit("new-notify", newNotify);
  });
});
const port = 8081;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
