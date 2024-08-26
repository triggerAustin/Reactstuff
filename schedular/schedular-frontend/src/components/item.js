import React, { useState } from "react";


const Item = () =>{
        const [showContents, setShowContents] = useState(true);
        const remove = () =>{
                setShowContents(!showContents)
        }

        return(
                <>
                {showContents && (
                        
                <div className="rounded-lg mt-4 h-24 bg-gray-200 min-w-[300px] align-middle" style={{width : '98%'}}>
                        <span className="float-left mr-2 text-green-400  h-full  rounded-r-md" style={{fontSize: '5rem', lineHeight: '1'}}>&middot;</span>
                      <div className="pt-3">
                        <span>
                                <span className="float-left bg-gray-300 p-0.5 rounded text-sm font-bold">#priority</span>
                                <span className="float-right mr-3 pt-0 cursor-pointer" onClick={remove}> &times;</span>
                        </span>
                        <div className="float-left justify-between flex pt-3 mt-2 pr-2 font-medium" style={{ width: 'calc(100% - 5rem)' }}>
                                <span>
                                        Take the trash out
                                </span>
                                <span>
                                        10:54AM
                                </span>
                        </div>
                      </div>
                </div>
                       
                )}
                 </>
        );
}

export default Item;