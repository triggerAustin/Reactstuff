// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const DBCONNECT = require('./db/connect');
const taskRoutes = require('../routes/taskRoutes')

dotenv.config(); //Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
DBCONNECT;
DBCONNECT.on('error', console.error.bind(
  console, 'MongoDB connection error:'));
DBCONNECT.once('open', () =>{
  console.log('connected to MongoDB')
});

// Use the saveTask function
app.use('/api', taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
