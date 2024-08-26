const Task = require('../models/DataModel')

const saveTaskToDB = async(taskData) =>{
    try {
      await Task.create(taskData);
      const msg = 'Task saved to DB'
      console.log(JSON.stringify(msg));
    } catch (error) {
      const errMsg = 'Error saving task:'
      console.error(JSON.stringify(errMsg), error);
    }
}

module.exports = {
    saveTaskToDB
  };