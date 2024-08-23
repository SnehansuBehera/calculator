import express from 'express';
import cors from 'cors';
import router from './routes/userRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectdb();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api/users', router);
app.use('/api/clients', clientRoutes);
app.use('/api/projects', projectRoutes);

app.listen(port, () => console.log(`Server running on ${port}`));
