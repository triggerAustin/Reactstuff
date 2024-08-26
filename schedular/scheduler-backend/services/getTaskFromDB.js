const Task = require('../models/DataModel')

const getTaskFromDB = async() => {
  try{
    const taskData  = await Task.find();
    return ((taskData));
  } catch (error) {
    throw new Error('error getting Task', error.message);
  }
}

module.exports = {
    getTaskFromDB
}