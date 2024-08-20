const express = require('express');
const router = express.Router();
const { saveTask } = require('../controllers/taskController');

// Define routes
router.post('/tasks', saveTask); // POST /api/tasks

module.exports = router;
