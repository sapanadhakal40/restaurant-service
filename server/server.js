import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pool from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Food Delivery App Server!')
})

app.get('/api/test', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  });

  //api endpoints
  app.use('/api/food', foodRouter);
  app.use("/images", express.static("uploads"));

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})



















