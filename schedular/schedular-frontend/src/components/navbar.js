import {React, useState } from 'react';
import Listitem from './navitem';
import { FaBars, FaCog, FaRegUserCircle, FaCalendarDay, FaListAlt } from "react-icons/fa"

const Navbar = (props) => {
  const links = [];
  const tags = [];
  const propsList = [
  {icon : FaRegUserCircle , title : 'My Day'},
  {icon : FaCalendarDay, title : 'Next 7 Days'},
  {icon : FaListAlt, title : 'All My Tasks'}
  ]
  const tagList =[
    {title : 'Personal', count : 10},
    {title : 'Family', count : 5},
    {title : 'Work', count : 8},
    {title : 'practice', count : 4},
    {title : 'study', count : 9}
  ]

  for(let i = 0; i < 3; i++){
      const { icon: Icon, title } = propsList[i];
      links.push(<Listitem icon={<Icon />} title={title} key={i}/>)
  }
  for(let i = 0; i < 5; i++){
    const {title, count} = tagList[i];
    tags.push(<Listitem title={title} count={count} key={i}/>)
  }
  const [showContents, setShowContents] = useState(true);
  const minimizeBar = ()=>{
    setShowContents(!showContents)
  };
  return(
    <div className={`${showContents ? ' md:w-1 lg:w-5' : 'w-5 lg:w-5 none bg-white'}`}>
      
        <div className='  h-1/3 flex flex-col '>
          <>
           
            <div className='h-1/3 flex flex-col p-3'>
                <span className='text-md font-bold'>{props.name}</span>
                <span className='rounded-md bg-green-300 p-2 font-bold text-sm'>Go premium</span>
            </div>
            <div className=' flex flex-row justify-between'>
             <FaCog className='text-2xl'/>
             <FaBars className='text-3xl' onClick={minimizeBar}/>
           </div> 
          </>
          <div className='flex flex-col align-center items-center'>
            {links}
          </div>
        </div>
        <div className=' h-3/6 flex flex-col p-3'>
          <span className='self-start text-lg font-medium mb-2'>My List +</span>
          <div className='flex flex-col align-center items-center'>
            {tags}
          </div>
        </div>
        <div className='h-1/6'>
            contact
        </div>
    </div>
  )
}

export default Navbar;