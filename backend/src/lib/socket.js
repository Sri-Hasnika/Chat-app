import { Server } from "socket.io"; // Provides real-time bidirectional communication capabilities.
import http from "http"; // Used to create an HTTP server.
import express from "express";

const app = express();

// Create an HTTP server using Express.
const server = http.createServer(app);

// Initialize a Socket.IO server and configure CORS.
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"] // Allow connections only from this origin.(frontend url)
    }
});

// Object to map user IDs to their respective socket IDs.
const userSocketMap = {};


//Function to retrieve the socket ID of a specific user.
export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

// Listen for new socket connections.
io.on("connection", (socket) => {
    // console.log("A user connected", socket.id);

    // Retrieve the user ID from the query parameters in the handshake.
    const userId = socket.handshake.query.userId;

    // If a user ID is provided, map it to the current socket ID.
    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    // Emit(sending) the list of online users to all connected clients.
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // Listen for the "disconnect" event, triggered when a user disconnects.
    socket.on("disconnect", () => {
        // console.log("A user disconnected", socket.id);

        // Remove the user from the map and update the list of online users.
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { io, app, server };
