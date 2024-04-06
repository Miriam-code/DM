import { Server, Socket } from "socket.io";
import User from "./models/users.model";
import Message from "./models/messages.model";
import ChannelModel from "./models/channels.model";
import UserModel from "./models/users.model";

export default function initializeSocket(server: any) {
    
  const io: Server = new Server(server, {
    allowEIO3: true,
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  io.use(async (socket: Socket, next: Function) => {
    try {
      const iduser: string = (socket.handshake.query as { userId: string }).userId;
      (socket as any).userId = iduser;
      next();
    } catch (err) {
      next(err);
    }
  });

  io.on("connection", (socket: Socket) => {
    console.log("user Connected: " + (socket as any).userId);

    socket.on("disconnect", () => {
      console.log("user Disconnected: " + (socket as any).userId);
    });

    socket.on("joinRoom", ({ channelId }: { channelId: string }) => {
      socket.join(channelId);
      console.log("A user joined chatroom: " + channelId);
    });

    socket.on("leaveRoom", ({ channelId }: { channelId: string }) => {
      socket.leave(channelId);
      console.log("A user left chatroom: " + channelId);
    });

    socket.on("chatroomMessage", async ({ channelId, message }: { channelId: string, message: string }) => {
      console.log("msg en cours...")
      console.log(message)
      if (message && message.trim().length > 0) {
        try {
          const user = await User.findOne({ _id: (socket as any).userId });
    
          if (user) {
            const newMessage = await Message.create({
              channelId: channelId,
              userId: (socket as any).userId,
              userName: user.pseudo,
              content: message,
            });
  
            const channel = await ChannelModel.findOne({ _id: channelId });
            if (channel && !channel.participants.includes((socket as any).userId)) {

              await ChannelModel.findByIdAndUpdate(channelId, { $push: { participants: (socket as any).userId } });
            }
    
            await ChannelModel.findByIdAndUpdate(channelId, { $push: { messages: newMessage._id } });
            
      
            await UserModel.findByIdAndUpdate((socket as any).userId, { $push: { messages: newMessage._id } });
    
            io.to(channelId).emit("newMessage", {
              message,
              Username: user.pseudo,
              userId: (socket as any).userId,
            });
            console.log("Message saved:", newMessage);
          } else {
            console.log("User not found.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        console.log('Message is undefined or empty!');
      }
    });
    
    

  });
}
