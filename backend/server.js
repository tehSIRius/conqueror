const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(helmet());

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 4001;
const SOCKETPORT = 5000;

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
http.listen(SOCKETPORT, () => {
  console.log(`Sockets listening on ${SOCKETPORT}`);
});