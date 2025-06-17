import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'mydatabase',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
  },
  api: {
    key: process.env.API_KEY || '',
  },
};

export default config;