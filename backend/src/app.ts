import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { json } from 'body-parser';
// import { routes } from './routes';
//import { config } from './config';
import { connectDB } from './config/DB-conection';
import router from './routes/index';
import { seedAdmin } from './seeds/admin.seed';
//import { authenticateUser } from './middlewares/authentication.middleware';

dotenv.config({ path: require('path').resolve(__dirname, '../.env') });

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'user-id']
}));
app.use(json());

app.get('/', (req, res) => {
  res.send('API is running');
});

(async () => {
  await seedAdmin();
})();

app.use('/api', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: err.message || 'something went wrong',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;