import { React, useState } from "react";

const Listitem = (props) => {
        const [isActive, setISActive] = useState(false);

        function ColorCode(){
                setISActive(!isActive)
        }
        return(
                <>
                        <div onClick={ColorCode}
                                 className={`h-8 hover:bg-gray-400 mt-2 p-4 sm:w-4/5 lg:4/5 rounded-md flex flex-row justify-start items-center cursor-pointer 
                                        ${isActive ? "bg-gray-300" : null}`}>
                                {props.icon &&  <span className="mr-3 text-xl font-black">{props.icon} </span>}
                                <span className="flex flex-row justify-between w-full">
                                <span className="font-medium text-gray-800"> {props.title}</span>
                                {props.count && <span className="rounded-full bg-gray-500 text-white text-sm  p-1 h-6 align-center w-6 flex items-center justify-center">{props.count}</span>}
                                </span>
                        </div>
                </>
        )
}

export default Listitem;