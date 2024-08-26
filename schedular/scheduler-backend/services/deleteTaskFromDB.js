const Task = require('../models/DataModel')

const deleteTasksFromDB = async(res) => {
  try{
    await Task.deleteMany();
    return;
  } catch (error) {
    throw new Error('error getting Task', error.message);
  }
}

const deleteOneTaskFromDB = async(req, res) => {
    try{
      await Task.deleteOne({})
    } catch (error){

    }
}

module.exports = {
    deleteTasksFromDB,
    deleteOneTaskFromDB
}