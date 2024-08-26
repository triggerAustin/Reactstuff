import {React, useState, useEffect } from 'react';
import Listitem from './navitem';
import { FaBars, FaCog, FaRegUserCircle, FaCalendarDay, FaListAlt } from "react-icons/fa"
import IconPack from './icon';


const Navbar = (props) => {
  const links = [];
  const tags = [];
  const spans = document.querySelectorAll('#navbar p');
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
  
  useEffect(() => {
    spans.forEach(span => {
      if (!showContents) {
        span.classList.remove('hidden');
        console.log('dsafd')
      } else {
        span.classList.add('hidden');
      }
    });
  }, [showContents]);

  return(
    <div className={`${showContents ? ' md:w-5 lg:w-12' : 'w-1 lg:w-1/6'} h-screen min-h-max pl-2 pr-1 z-10 absolute bg-gray-50`} id='navbar'>
      
        <div className='  h-1/3 flex flex-col '>
          <>
           
            <div className='h-1/3 flex flex-col p-1'>
                <p className=' hidden text-md font-bold'>{props.name}</p>
                <p className=' hidden rounded-md bg-green-300 p-2 font-bold text-sm'>Go premium</p>
            </div>
            <div className={`${showContents ? 'flex-col gap-2' : 'flex-row'} flex justify-between`}>
             <IconPack iconName={<FaBars/>} iconFn={minimizeBar}/>
             <IconPack iconName={<FaCog />}/>
           </div> 
          </>
          <div className='flex flex-col align-center items-center'>
            {links}
          </div>
        </div>
        <div className=' h-3/6 flex flex-col p-1'>
          <p className=' hidden self-start text-lg font-medium mb-2'>My List +</p>
          <div className='flex flex-col align-center items-center'>
            {tags}
          </div>
        </div>
        <div className='h-1/6'>
            <p className='hidden '>contact</p>
        </div>
    </div>
  )
}

export default Navbar;