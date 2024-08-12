import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './database/db.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from localhost:3000
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Your routes here
import Router from './routes/route.js';
app.use('/', Router);

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connectDB(username, password)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running successfully on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
    process.exit(1);
  });
