import express from 'express';
import mongoose from 'mongoose';
import bugRoutes from './routes/bugRoutes.js';
import postRoutes from './routes/postRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);
app.use('/api/posts', postRoutes);
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/bugtracker');

export default app;