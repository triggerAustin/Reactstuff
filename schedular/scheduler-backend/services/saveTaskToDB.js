const Task = require('../models/DataModel')

const saveTaskToDB = async(taskData) =>{
    try {
      const savedTask = await Task.create(taskData);
      console.log('Task saved to DB');
      return savedTask
    } catch (error) {
      console.error('Error saving task:', error);
    }
}

module.exports = {
    saveTaskToDB
  };