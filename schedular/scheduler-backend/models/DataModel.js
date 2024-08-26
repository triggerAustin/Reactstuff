// backend/models/DataModel.js
const  mongoose = require('mongoose');
const {Schema, model} = mongoose;


const TaskSchema = new Schema({
  taskTitle: {type: String, required: true},
  description: {type: String, required: true},
  priority: {type: String, default: null},
  dateSet: {type: Date, default: Date.now},
  dateToStart: {type: Date, default: Date.now},
  dateToComplete: {type: Date, default: () => new Date(
    +new Date() + 7*24*60*60*1000)}, // defualts to seven days from date set
  isCompleted : {type: Boolean, default: false}
});

const Task = model('Task', TaskSchema);

module.exports = Task;
