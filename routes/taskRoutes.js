const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleWare');
const {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.route('/')
  .post(protect, createTask)
  .get(protect, getTask);

router.route('/:id')
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;