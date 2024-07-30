import { io } from 'socket.io-client';

export const socket = io('https://memories-api-arvm.onrender.com', {
    reconnection: true
})