const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
