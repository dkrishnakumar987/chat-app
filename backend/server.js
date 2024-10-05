import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import dbConnect from "./db/dbconnect.js";

const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server running at http://localhost:${PORT}`);
});
