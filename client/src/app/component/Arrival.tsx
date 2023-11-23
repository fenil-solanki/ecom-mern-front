import React from 'react'

const Arrival = () => {
  return (
    <section className='container mx-auto my-6'>
        <div className='pl-2.5'>
          <div className='border-4 mr-6 border-[#8A33FD] rounded-lg inline mr-4 sm:mr-8 lg:mr-12'></div>
          <div className=' inline'>
          <h2 className='font-medium text-xl inline md:font-semibold md:text-4xl ' style={{color:"#3C4242"}}>New Arrival</h2>

          </div>
        </div>
        <div className='py-8 px-0 sm:px-4 lg:px-0'>
          <div className='grid grid-cols-2 gap-3 px-4 sm:grid-cols-4 xl:gap-3'>
            <div className='mx-auto mb-2 sm:mb-0'>
              <img src="arrival-1.png" alt="" />
              <p style={{color:"#3C4242"}} className='text-lg font-semibold my-5 lg:font-bold lg:text-xl'>Knitted Joggers</p>
            </div>
            <div className='mx-auto mb-2 sm:mb-0'>
              <img src="arrival-2.png" alt="" />
              <p style={{color:"#3C4242"}} className='text-lg font-semibold my-5 lg:font-bold lg:text-xl'>Full Sleeve</p>
            </div>
            <div className='mx-auto mb-2 sm:mb-0'>
              <img src="arrival-3.png" alt="" />
              <p style={{color:"#3C4242"}} className='text-lg font-semibold my-5 lg:font-bold lg:text-xl'>Active T-Shirts</p>
            </div>
            <div className='mx-auto mb-2 sm:mb-0'>
              <img src="arrival-4.png" alt="" />
              <p style={{color:"#3C4242"}} className='text-lg font-semibold my-5 lg:font-bold lg:text-xl'>Urban Shirts</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Arrival
