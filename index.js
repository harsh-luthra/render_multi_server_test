const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create the first Express app
const app = express();
const port = process.env.PORT || 3000;

// Create an HTTP server
const server = http.createServer(app);

// Attach Socket.IO to the HTTP server
const io = socketIo(server);

app.get('/api1', (req, res) => {
  res.send('This is the response from the first Express server');
});

// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('WebSocket client connected');
  socket.on('message', (message) => {
    console.log('Received message:', message);
    socket.emit('message', 'Hello from WebSocket server!');
  });
});

// Start the HTTP server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
