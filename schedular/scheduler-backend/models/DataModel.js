// backend/models/DataModel.js
const  mongoose = require('mongoose');
const {Schema, model} = mongoose;


const TaskSchema = new Schema({
  taskTitle: {type: String, required: true},
  description: {type: String, required: true},
  dateSet: {type: Date, required: true},
  dateToStart: {type: Date, required: true},
  dateToComplete: {type: Date, required: true}
});

const Task = model('Task', TaskSchema);

module.exports = Task;
