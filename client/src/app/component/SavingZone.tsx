import React from 'react'
import {BsArrowDown} from 'react-icons/bs'

const SavingZone = () => {
  return (
    <section className='container mx-auto'>
<div>

<div className='border-4 border-[#8A33FD] rounded-lg inline mr-12'></div>
          <div className=' inline'>
          <h2 className='font-semibold text-4xl inline' style={{color:"#3C4242"}}>Big Saving Zone</h2>

          </div>
          </div>


        <div className='py-8'>
        <div>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-3 '>
            <div className='bg-bigzone1 bg-no-repeat bg-cover py-[106px] px-4'>
                <h3 style={{color:"#fff"}} className='font-semibold text-4xl'>
                Hawaiian <br />Shirts
                </h3>
                <p style={{color:"#fff"}} className='font-semibold text-sm mt-5 mb-1'>Dress up in summer vibe</p>
                <p style={{color:"#fff"}} className='font-bold text-lg'>UPTO 50% OFF</p>
                <BsArrowDown className='my-6 ml-12' size={30} style={{color:"#fff"}}></BsArrowDown>
                <button style={{color:"#fff"}} className='font-medium text-xs border border-[#fff] rounded-lg py-3 px-8'>SHOP NOW</button>
            </div>


            <div className='bg-bigzone2 bg-no-repeat bg-cover pt-[26px] pb-20 px-4 text-right'>
                <div className='ml-24 pr-4 pt-6'>
                <div className='font-bold text-xs bg-[#3C4242] inline rounded-md  py-3.5 px-6' style={{color:"#fff"}}>Limited Stock</div>
            <h3 style={{color:"#fff"}} className='font-semibold text-4xl mt-5'>
            Printed <br></br>T-Shirt
                </h3>
                <p style={{color:"#fff"}} className='font-semibold text-sm mt-6 mb-1'>New Designs Every Week</p>
                <p style={{color:"#fff"}} className='font-bold text-lg'>UPTO 40% OFF</p>
                <BsArrowDown className='my-6 ml-64' size={30} style={{color:"#fff"}}></BsArrowDown>
                <button style={{color:"#fff"}} className='font-medium text-xs border border-[#fff] rounded-lg py-3 px-8'>SHOP NOW</button>
                </div>
                

            </div>


            <div className='bg-bigzone3 bg-no-repeat bg-cover pt-[26px] pb-20 px-4'>
                <div className='pl-64 pr-4 pt-6'>
            <h3 style={{color:"#3C4242"}} className='font-semibold text-4xl mt-5'>
            Cargo <br /> Joggers
                </h3>
                <p style={{color:"#3C4242"}} className='font-semibold text-sm my-6'>Move with style & comfort</p>
                <p style={{color:"#3C4242"}} className='font-bold text-lg'>UPTO 50% OFF</p>
                <BsArrowDown className='my-6 ml-12' size={30} style={{color:"#3C4242"}}></BsArrowDown>
                <button style={{color:"#3C4242"}} className='font-medium text-xs border border-[#3C4242] rounded-lg py-3 px-8'>SHOP NOW</button>
                </div>
                

            </div>
        </div>
        </div>

        <div className='pt-11'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='bg-bigzone4 bg-no-repeat pt-16 pb-28 bg-cover object-cover pl-96'>
                    <div className='pl-16'>
                    <h3 className='font-semibold text-3xl' style={{color:"#3C4242"}}>Urban<br></br> Shirts</h3>
                    <p className='font-semibold text-base' style={{color:"#3C4242"}}>Live In Confort</p>
                    <p style={{color:"#3C4242"}} className='text-xl font-bold'>FLAT 60% OFF</p>
                    <BsArrowDown className='my-6 mr-10' size={30} style={{color:"#fff"}}></BsArrowDown>
                    <button>SHOP NOW</button>
                    </div>
                
                </div>
                <div className='bg-bigzone5 bg-no-repeat pt-16 pb-28 bg-cover object-cover pl-96'>
                <div className='pl-16'>
                <h3 className='font-semibold text-3xl' style={{color:"#3C4242"}}>Oversized<br></br> T-Shirts</h3>
                    <p className='font-semibold text-base' style={{color:"#3C4242"}}>Street Style Icon</p>
                    <p style={{color:"#3C4242"}} className='text-xl font-bold'>FLAT 60% OFF</p>
                    <BsArrowDown className='my-6 mr-10' size={30} style={{color:"#fff"}}></BsArrowDown>
                    <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
        </div>


    </section>
  )
}

export default SavingZone