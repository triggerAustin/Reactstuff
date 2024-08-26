const { saveTaskToDB } = require('../services/saveTaskToDB');
const { getTaskFromDB } = require('../services/getTaskFromDB');
const { deleteTasksFromDB } = require('../services/deleteTaskFromDB');

//save task to DB
const saveTask = async (req, res) => {
    try {
        await saveTaskToDB(req.body);
        const msg = 'Task saved successfully';
        res.status(201).send(JSON.stringify(msg));
      } catch (error) {
        const errMsg = 'Error saving task: '
        res.status(500).send(JSON.stringify(errMsg) + error.message);
      }
  };

const getTask = async (req, res) => {
   try{
    const taskData = await getTaskFromDB()
    res.status(200).json(taskData);
   } catch (error){
    const errMsg = 'Error retrieving task: '
    res.status(400).send(JSON.stringify(errMsg) + error.message);
   }
};

const deleteTask = async (req) => {
  try{
    await deleteTasksFromDB()
    return ('deleted')
  } catch (error){
    const errMsg = 'Error Deleting Task: '+  error.message;
    throw new Error(errMsg);
  }
}

module.exports = {
    saveTask,
    getTask,
    deleteTask,
  };