// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const DBCONNECT = require('./db/connect');
const Task = require('../models/DataModel')

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

// Define Routes
app.get('/api/task', async(req, res) => {
  // Replace with your data-fetching logic
  try{
    const task = await Task.find();
    res.json(task);
  }
  catch (error){
    res.status(500).send(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
