import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import dbConnect from './db/dbconnect.js';

import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 8080;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
  dbConnect();
  console.log(`Server running at http://localhost:${PORT}`);
});
