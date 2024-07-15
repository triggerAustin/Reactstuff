// server/index.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Default port or use one defined in .env

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.send('Scheduler Backend API is running!');
});

// Other routes will go here...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
