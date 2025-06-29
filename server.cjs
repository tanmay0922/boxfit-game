const { Server } = require("socket.io");
const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Shared 10x10 initial grid state (global memory)
let gridState = Array.from({ length: 10 }, () => Array(10).fill(0));

// ✅ Emit the current grid safely
function emitGridState(socket) {
  try {
    console.log("📤 Sending grid to client:", gridState);
    socket.emit("init", gridState);
  } catch (err) {
    console.error("❌ Failed to emit grid:", err);
  }
}

io.on("connection", (socket) => {
  console.log("🟢 New player connected:", socket.id);

  // Send the current grid state to new connection
  emitGridState(socket);

  // ✅ Accept updates only if they're valid 10x10 grids of 0s and 1s
  socket.on("update-grid", (newGrid) => {
    const isValidGrid =
      Array.isArray(newGrid) &&
      newGrid.length === 10 &&
      newGrid.every(
        (row) =>
          Array.isArray(row) &&
          row.length === 10 &&
          row.every((cell) => cell === 0 || cell === 1)
      );

    if (!isValidGrid) {
      console.warn("⚠️ Rejected malformed grid update from", socket.id);
      return;
    }

    // Save and broadcast
    gridState = newGrid;
    console.log("📝 Grid updated by", socket.id);
    socket.broadcast.emit("grid-updated", newGrid);
  });

  socket.on("disconnect", () => {
    console.log("🔴 Player disconnected:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("✅ Socket.io server running on port 4000");
});

