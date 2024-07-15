import React, {useState} from "react";
import {MdOutlineAccessTimeFilled} from 'react-icons/md'
import { FaRegListAlt, FaSlackHash } from "react-icons/fa";

const Inputtask = () =>{
        const [inputValue, setInputValue] = useState('');
        const handleInputChange = (event) => {
                setInputValue(event.target.value);
            };
        return(
                <div className="bg-opacity-80 bg-white h-24 relative flex items-center p-6" style={{bottom: '5rem'}}>
                        <div className="bg-gray-300 w-full flex justify-between rounded-md p-2">
                                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter text"
                                        className="outline-0 h-10 bg-transparent" style={{color : 'black'}}>
                                </input>
                                <div className="flex flex-row gap-5 items-center">
                                        <span className="text-xl rounded-md p-2 bg-gray-400 cursor-pointer"><FaSlackHash/></span>
                                       <span className="text-xl rounded-md p-2 bg-gray-400 cursor-pointer"><MdOutlineAccessTimeFilled/></span> 
                                       <span className="text-xl rounded-md p-2 bg-gray-400 cursor-pointer"><FaRegListAlt/></span>
                                        <button className="bg-green-400 rounded-lg p-1 items-center flex font-medium text-sm px-3 cursor-pointer">Add Task <span className="hover:scale-5 ml-3 font-bold mb-1 text-xl">+</span></button>
                                </div>
                        </div>
                </div>
        );
}

export default Inputtask;