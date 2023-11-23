import React from 'react'

const Offer = () => {
  return (
    <div className='container mx-auto my-6 sm:my-14'>

    
    <div className='grid grid-cols-2 mt-5 md:px-12 lg:px-0' style={{color:"white"}}>
      <div className="bg-banner1 col-span-2 my-2 bg-no-repeat bg-contain lg:py-6 2xl:py-16 px-10 rounded lg:col-span-1 sm:my-0">
        <div className=''>
        <p className='mt-5 font-extrabold text-lg'>Low Price</p>
        <h3 className='font-semibold mt-3 font-extrabold text-3xl 2xl:text-4xl'>High Coziness</h3>
        <p className='mt-5 font-medium text-base'>UPTO 50% OFF</p>
        <p className='mt-10 underline font-extrabold text-xl'>Explore Items</p>
        </div>
        
      </div>

      <div className="bg-banner2 col-span-2 my-2 bg-no-repeat bg-contain lg:py-6 2xl:py-16 px-10 rounded lg:col-span-1 sm:my-0">
        <div className=''>
        <p className='mt-5 font-extrabold text-lg'>Beyoung Presents</p>
        <h3 className='font-semibold mt-3 font-extrabold text-3xl 2xl:text-4xl'>Breezy Summer <br></br> Style</h3>
        <p className='mt-5 font-medium text-base'>UPTO 50% OFF</p>
        <p className='mt-8 underline font-extrabold text-xl lg:mt-10'>Explore Items</p>
        </div>
        
      </div>

    </div>
    </div>
  )
}

export default Offer