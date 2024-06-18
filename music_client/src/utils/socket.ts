import { io } from "socket.io-client";
import { env } from "../configs/env";

export const socket = io(env.socketUrl, {
    reconnection: true,
    autoConnect: true,
    withCredentials: true,
});