import React from 'react';
import Listitem from './navitem';
import { FaCog, FaRegUserCircle, FaCalendarDay, FaListAlt } from "react-icons/fa"

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
  
  return(
    <div className='w-2/12'>
        <div className=' h-1/3 flex flex-col'>
          <>
            <FaCog/>
            <div className='h-1/3 flex flex-col p-3'>
                <span className='text-md font-bold'>{props.name}</span>
                <span className='rounded-md bg-green-300 p-2 font-bold text-sm'>Go premium</span>
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