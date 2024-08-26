import { React, useState } from "react";
import Item from "./item";
import Inputtask from "./inputtask"



//list in the middle of the screen
const Dailyitems = (props) => {
        const tasks = []
        const getTasks = async () => {
                try {
                  const response = await fetch(
                    'http://localhost:5000/api/tasks',
                    {
                      method: 'GET',
                      headers: {
                        'content-type': 'application/json' 
                      },
                    }
                  )
                  if(response.ok){
                    console.log('done')
                  }
                console.log(response)
                        } catch (error) {
                  console.error('Error:', error);
                }
                  };
        getTasks();
        const items_list = [];
  

        for (let i = 0; i < props.items_count; i++) {
                items_list.push(<Item/>);
              }
        return(
                <>
                        <div className="border-l-2 flex-wrap lg:w-3/4 " style={{height: '100%'}}>
                                <div className="h-14 flex flex-row p-1 border-b-2 justify-between items-center mx-6 px-12">
                                        <p className="text-base font-bold">Welcome, {props.name}!</p>

                                </div>
                                <div className="ml-6 overflow-y-scroll pb-16" style={{height: '91%'}}>
                                {items_list}
                                </div>
                                <Inputtask/>
                        </div>

                </>
        );
}

export default Dailyitems;