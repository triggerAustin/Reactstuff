import React from 'react';

const IconPack = (props) => {
  const iconClasses = `${props.bgColor ? props.bgColor : 'bg-gray-500'} 
                          text-xl rounded-md p-2 cursor-pointer`;

  return(
    <>
      <span className={iconClasses} onClick = {props.iconFn ? props.iconFn : null}>{props.iconName}</span>
    </>
  )
}

export default IconPack;