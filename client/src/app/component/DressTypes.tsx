import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const DressTypes = ({type}:any) => {
    const {updateFilterValue}=useFilterContext()
    const capitalType = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div className='w-full  py-1 sm:py-2 '>
      <input type="checkbox" className='h-[15px] w-[15px] mx-3 sm:ml-0 sm:mr-1 sm:h-[12px] sm:w-[12px] md:ml-1 md:mr-1.5 lg:mx-3  md:h-[15px] md:w-[15px]' id={type} value={type} name="type" onClick={updateFilterValue}/>
    <span  className="font-semibold text-left text-xs sm:text-xs md:text-base lg:text-xl" style={{color:"#8A8989"}}>
    {capitalType}
    </span>

    </div>
  )
}

export default DressTypes
