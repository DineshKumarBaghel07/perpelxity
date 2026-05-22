import { io } from "socket.io-client";

const url = import.meta.env.VITE_BASE_URL || "http://localhost:3000";
export const initializeSocketConnection = () => {

    const socket = io( url, {
        withCredentials: true,
    })

    socket.on("connect", () => {
        console.log("Connected to Socket.IO server")
    })

}