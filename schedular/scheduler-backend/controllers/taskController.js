const { saveTaskToDB } = require('../services/saveTaskToDB')

//save task to DB
const saveTask = async (req, res) => {
    try {
        await saveTaskToDB(req.body);
        res.status(201).send('Task saved successfully');
      } catch (error) {
        res.status(500).send('Error saving task: ' + error.message);
      }
  };
  
module.exports = {
    saveTask
  };