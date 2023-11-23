import React from 'react'

const Colors = ({curColor,updateFilterValue}:any) => {
  return (
    <input type='checkbox' name="color" key={curColor} onClick={updateFilterValue} value={curColor} className='h-6 w-6 rounded rounded-lg m-2.5 sm:m-0 sm:mb-2 border border-[#000] md:h-7 md:w-7 lg:text-xl lg:border-2 lg:h-9 lg:w-9 lg:mb-4' style={{ backgroundColor: curColor }}>

    </input>
  )
}

export default Colors
