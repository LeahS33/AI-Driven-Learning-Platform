import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { json } from 'body-parser';
// import { routes } from './routes';
//import { config } from './config';
import { connectDB } from './config/DB-conection';
import userRoutes from './routes/user.routes';
import categoryRoutes from './routes/category.routes';

dotenv.config({ path: require('path').resolve(__dirname, '../.env') });

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running');
});

//API routes
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;