import React, {useState} from "react";
import {MdInput, MdOutlineAccessTimeFilled, MdOutlineSearch} from 'react-icons/md'
import { FaRegListAlt, FaSlackHash } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import IconPack from "./icon";

const Inputtask = () =>{
  const [searchTerm, setInputValue] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setDescription] = useState('');
  const [showForm, setShow] = useState(true);
  const [showPriority, setPriority] = useState(true);
  const [showTags, setTag] = useState(true);
 
  const displayPriority = () =>{
      setPriority(!showPriority)
  }
  const displayTags = () =>{
    setTag(!showTags)
}
  const saveTask = async () => {
    const taskData = {
      taskTitle: taskTitle,
      description: taskDescription,
      dateSet: new Date(), // Use the current date
      dateToStart: new Date('2024-08-25'),
      dateToComplete: new Date('2024-08-30')
    };
    
    try {
        console.log('started');
      const response = await fetch(
        'http://localhost:5000/api/tasks',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json' 
          },
        body: JSON.stringify(taskData)
        }
      )
      if(response.ok){
        console.log('done')
      }
    } catch (error) {
      console.error('Error:', error);
    }
      };        
  return(
    <>
     <div className="bg-opacity-80 h-24 relative flex items-center p-6" style={{bottom: '5rem'}}>
        <div className="bg-gray-300 w-full flex justify-between rounded-md p-2">
          <input type="text" value={searchTerm} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter task title"
                  className="outline-0 h-10 bg-gray-400 w-4/6 rounded-lg p-2" style={{color : 'black'}}>
          </input>
          <form className="flex flex-row gap-5 items-center">
                {/* <span className={iconClasses}><FaSlackHash/></span> */}
                <IconPack iconName={<FaSlackHash/>}/>
                <IconPack iconName={<MdOutlineAccessTimeFilled/>}/> 
                <IconPack iconName={<FaRegListAlt/>}/>
                <IconPack iconName={<MdOutlineSearch />}/> 
          </form>
          <button className="bg-green-400 text-xl rounded-md p-2 cursor-pointer" onClick={(e) => setShow(!showForm)}>
            <MdInput />
          </button>
        </div>
     </div>
     {showForm && (
      <form className="bg-gray-50 flex flex-col absolute rounded-mdmin-h-fit top-1/4 left-1/4 p-2 min-w-96" style={{width: "45%"}}>
        <label className=" flex gap-16 items-center">Title:
          <input type="text"  placeholder="Enter task title *"
                  className="outline-0 h-10 bg-gray-400 w-1/2 rounded-lg p-2 mb-2" style={{color : 'black'}}
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}/>
        </label>
        <label className=" flex gap-3 items-center">Description:
          <textarea  placeholder="Enter task description"
                  className="outline-0 bg-gray-400 w-1/2 rounded-lg p-2" style={{color : 'black'}}
                  value={taskDescription}
                  onChange={(e) => setDescription(e.target.value)}/>
        </label>
          <div className="flex flex-row gap-5 items-center mt-3">
            <IconPack iconName={<FaSlackHash/>} iconFn={displayPriority}/>
            <IconPack iconName={<IoPricetag/>} iconFn={displayTags}/>
            <button className="bg-green-400 text-xl rounded-md p-2 cursor-pointer float-right relative"  onClick={taskTitle != '' ? saveTask : null}>
              <MdInput />
            </button>
          </div>
            {showPriority && (<ul className="flex gap-4 mt-5 ">
              <li ><input type="checkbox" /><span className="bg-purple-900 rounded-lg p-1 ml-2 ">High</span></li>
              <li><input type="checkbox" /><span className="bg-purple-600 rounded-lg p-1 ml-2">Moderate</span></li>
              <li><input type="checkbox" /><span className="bg-purple-300 rounded-lg p-1 ml-2">Low</span></li>
            </ul>)}
            {showTags && (<ul className="flex gap-1 mt-3 flex-col items-start ml-5">
              <p>TAGS</p>
              <li><input type="checkbox" className="mr-2"/>Personal</li>
              <li><input type="checkbox" className="mr-2"/>Family</li>
              <li><input type="checkbox" className="mr-2"/>Work</li>
              <li><input type="checkbox" className="mr-2"/>Practice</li>
              <li><input type="checkbox" className="mr-2"/>Study</li>
            </ul>)}
      </form>
     )}

    </>
  );
}

export default Inputtask;