const express = require('express');
const router = express.Router();
const { saveTask, getTask, deleteTask } = require('../controllers/taskController');

// Define routes
router.post('/tasks', saveTask); // POST /api/tasks
router.get('/tasks', getTask); //GET /api/tasks
router.delete('/tasks', deleteTask)
module.exports = router;
