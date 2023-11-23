import { useFilterContext } from '@/context/FilterContext'
import React from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

const Companies = ({company}:any) => {
    const {updateFilterValue}=useFilterContext()
    const capitalcompany = company.charAt(0).toUpperCase() + company.slice(1);
  return (


<div className='w-full   py-1 sm:py-2 '>
  <input type="checkbox" value={company} name="company" id={company} className='h-[15px] w-[15px] mx-3 sm:ml-0 sm:mr-1 sm:h-[12px] sm:w-[12px] md:ml-1 md:mr-1.5 lg:mx-3  md:h-[15px] md:w-[15px]'  onClick={updateFilterValue} />
<button className="font-semibold text-left text-xs sm:text-xs md:text-base lg:text-xl " style={{color:"#8A8989"}}>
{capitalcompany}
</button>

</div>
  )
}

export default Companies
