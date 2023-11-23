import React from 'react'

const BetterFashion = () => {
  return (
    <section className='container mx-auto'>
        <div className='py-14'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className="bg-betterfashion1 bg-no-repeat bg-cover py-56 px-12 text-[1.5rem] sm:py-12 sm:px-6 md:py-16 lg:py-24 lg:bg-auto 2xl:py-72 2xl:bg-cover rounded-tl-lg rounded-bl-lg" style={{color:"white"}}>
                  <div className='md:px-12 lg:px-20'>
                  <h3 className='text-2xl font-bold md:text-3xl lg:font-extrabold lg:text-4xl'>WE MADE YOUR EVERYDAY <br></br>FASHION BETTER!</h3>
                    <p className='text-base md:text-lg lg:font-light my-8 lg:text-2xl'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                    <button style={{color:"#3C4242"}} className='py-2 px-12 md:px-16 md:py-3 rounded-lg bg-[#FFFFFF]'>Shop Now</button>
                  </div>
                   
                </div>
                <div className="bg-betterfashion2 bg-cover bg-no-repeat py-56 px-12 text-[1.5rem] sm:py-12 sm:px-6 md:py-16 lg:py-24 lg:bg-auto 2xl:py-72 2xl:bg-cover rounded-tr-lg rounded-br-lg">
          
                </div>
            </div>
        </div>
    </section>
  )
}

export default BetterFashion