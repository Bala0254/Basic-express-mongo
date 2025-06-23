import express from "express";
import userRouter from './routs/user.route.js';
import connectDB from "./lib/db.js";

import http from "http"; // needed to attach WebSocket to the same server
import initializeWebSocket from "./websocket/socket.js";

const fs = require('fs'); // File Operations


const app = express();
const port = 6969;

// 🔧 Middleware
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data (e.g., from forms)

// File path
const filePath = path.join(__dirname, 'data.txt');

// 👉 Write to file
app.post('/write', (req, res) => {
  const content = req.body.content;

  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Failed to write to file.');
    }
    res.send('File written successfully.');
  });
});

// 👉 Read from file
app.get('/read', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Failed to read file.');
    }
    res.send({ content: data });
  });
});

// 📌 Routes
app.use('/users', userRouter); // All user-related routes will be prefixed with /users

// DB Connection
connectDB();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Create HTTP server
const server = http.createServer(app);
const wsport = 7979;
// Init WebSocket
initializeWebSocket(server);

// ✅ Start both HTTP + WS
server.listen(wsport, () => {
    console.log(`🚀 Server running at http://localhost:${wsport}`);
});

