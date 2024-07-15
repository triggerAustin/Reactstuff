import React from "react";
import Event from "./event";
import { FiRefreshCcw } from "react-icons/fi";
import { MdTask } from "react-icons/md";
import { RiSearch2Fill } from "react-icons/ri";


const Eventstab = (props) =>{
        const event_list = [];

        for (let i = 0; i < props.events_count; i++) {
                event_list.push(<Event/>);
              }
            
        return(
                <div className="h-screen top-0 right-0 fixed mr-2 overflow-y-scroll p-3" style={{width: '24%'}}>
                        <div className="sticky top-0 bg-gray-200 p-1.5 px-3 rounded flex flex-row justify-between items-center"
                                style={{height: '60px', width : '98%'}}>
                                <p>Events</p>
                                <div className="flex flex-row gap-4">
                                        <RiSearch2Fill className="rounded-md p-1 bg-gray-400 text-2xl cursor-pointer"/>
                                        <FiRefreshCcw className="rounded-md p-1 bg-gray-400 text-2xl cursor-pointer"/>
                                        <MdTask className="rounded-md p-1 bg-gray-400 text-2xl cursor-pointer"/>
                                </div>
                        </div>
                        <div >
                                {event_list}
                        </div>
                </div>
        )
};

export default Eventstab;