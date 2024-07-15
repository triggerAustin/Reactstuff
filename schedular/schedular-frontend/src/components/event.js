import React, { useState } from 'react';

const Event = () =>{
        const [showContents, setShowContents] = useState(true);
        function show_contents(){
                setShowContents(!showContents);
        };
        return(
                <div onClick={show_contents} className={`border-b-2 border-gray-100 px-2 pt-6 flex cursor-pointer duration-700 ${showContents ? 'flex flex-col ' : ' flex h-14max-h-max'}`}>
                       
                        { showContents 
                                ? (
                                        <span className="text-base h-5 w-full flex mb-2">10AM</span>)
                                : (
                                        <>
                                                <div className='flex flex-row justify-between rounded p-1 bg-gray-200 text-black w-full mb-3'>
                                                        <div className="flex duration-500 justify-start flex-col gap-1">
                                                                <span>item</span>
                                                                <span className="text-xs">10AM</span>
                                                        </div>
                                                        <span className=" block mt-9 rounded text-sm h-1.5 w-4 bg-green-400"></span>
                                                </div>
                                        </>
                                )
                        }
                </div>
        );
};

export default Event;