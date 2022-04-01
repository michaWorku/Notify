import { Server } from "socket.io";

const io = new Server(5000,{
    cors:{
        origin: "http://localhost:3000",
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });