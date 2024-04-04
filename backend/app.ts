import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { connectToDatabase } from "./database";
import userRoutes from "./routes/users.route";
import channelRoutes from "./routes/channels.routes";
import messageRoutes from "./routes/messages.routes";
import emailVerificationRoutes from "./routes/emailVerification.route"



const app: Express = express();

app.use(express.json());

let allowedOrigins = [/localhost:\d{4,5}$/];



const corsConfig = {
  origin: allowedOrigins,
  credentials: true,
};
app.use("/upload", express.static(path.join(__dirname, "assets/upload")));
app.use(cors(corsConfig));


const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);


if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

connectToDatabase();

app.use(userRoutes);
app.use(emailVerificationRoutes)
app.use(channelRoutes);
app.use(messageRoutes);


export default app;
