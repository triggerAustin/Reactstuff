// backend/models/DataModel.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  taskTitle: {type: String, required: true},
  description: {type: String},
  dateSet: {type: Number, required: true},
  dateToStart: {type: Number, required: true},
  dateToComplete: {type: Number, required: true}
});

module.exports = mongoose.model('Task', TaskSchema);
