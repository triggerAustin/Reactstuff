import { React, useState } from "react";

const Listitem = (props) => {
        const [isActive, setISActive] = useState(false);

        function ColorCode(){
                setISActive(!isActive)
        }
        return(
                <>
                        <div onClick={ColorCode}
                                 className={`h-8 hover:bg-gray-400 mt-2  sm:w-4/5 lg:4/5 rounded-md 
                                        flex flex-row justify-between items-center cursor-pointer pl-1 pr-1
                                        ${isActive ? "bg-gray-300" : null}`}>
                                {props.icon &&  <span className=" text-xl font-black mr-2">{props.icon} </span>}
                                <span className="flex flex-row justify-between w-full ">
                                        <p className=" hidden font-medium text-gray-800"> {props.title}</p>
                                        {props.count && <span className="rounded-full bg-gray-500 text-white text-sm 
                                         p-1 h-6 w-6 flex items-center justify-center">{props.count}</span>}
                                </span>
                        </div>
                </>
        )
}

export default Listitem;