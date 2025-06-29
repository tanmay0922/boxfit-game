// src/socket.ts
import { io } from "socket.io-client";

// Create a single socket connection instance
export const socket = io("http://localhost:4000", {
  transports: ["websocket"], // ensures WebSocket is used over polling
});
