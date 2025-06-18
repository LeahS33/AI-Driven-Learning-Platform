import mongoose from 'mongoose';


export const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/my-db-name';
    //console.log('DATABASE_URL:', process.env.DATABASE_URL);
    //console.log('Connecting to:', MONGODB_URI);
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
