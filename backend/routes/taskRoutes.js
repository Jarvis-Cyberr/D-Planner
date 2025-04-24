const express = require('express');
const { addTask, getTasks, deleteTask } = require('../controllers/taskController');

const router = express.Router();

// Define task routes
router.post('/', addTask);
router.get('/', getTasks);
router.delete('/:id', deleteTask);

module.exports = router;
