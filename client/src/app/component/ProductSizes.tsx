import React from 'react'

const ProductSizes = ({curSize,updateFilterValue}:any) => {
  return (
    <div>
    <input type="checkbox"  value={curSize} name="size" id={curSize} onClick={updateFilterValue} className='h-[15px] w-[15px] mx-3 sm:ml-0 sm:mr-1 sm:h-[12px] sm:w-[12px] md:ml-1 md:mr-1.5 lg:mx-3  md:h-[15px] md:w-[15px]' />
    <span className='font-semibold text-left text-xs sm:text-xs md:text-base lg:text-xl' style={{color:"#8A8989"}} >{curSize}</span>
    </div>
                        
  )
}

export default ProductSizes
