import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import { register } from './controllers/auth.js';
import dbConnect from './config/dbConnect.js';

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
mongoose.set('strictQuery', false);
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
const PORT = process.env.PORT || 6001;
dbConnect();

app.post('/auth/register', register);

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
