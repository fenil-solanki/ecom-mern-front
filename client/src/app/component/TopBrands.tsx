import React from 'react'

const TopBrands = () => {
  return (
    <section className='container mx-auto py-14' style={{backgroundColor:"#3C4242"}}>
        <div style={{color:"white"}} className='text-center'>

            
            <h2 className='font-extrabold text-5xl'>Top Brands Deal</h2>
            <p className='text-2xl font-normal'>Up To <span style={{color:"#FBD103"}}>60%</span> off on brands</p>
        </div>
        <div className='grid grid-cols-5 mx-auto px-16'>
            <div className='mx-auto my-[25%]' style={{backgroundColor:"white"}}>
                <img src="brand-1.png" alt="" />
            </div>
            <div className='mx-auto my-[25%]' style={{backgroundColor:"white"}}>
                <img src="brand-2.png" alt="" />
            </div>
            <div className='mx-auto my-[25%]' style={{backgroundColor:"white"}}>
                <img src="brand-3.png" alt="" />
            </div>
            <div className='mx-auto my-[25%]' style={{backgroundColor:"white"}}>
                <img src="brand-4.png" alt="" />
            </div>
            <div className='mx-auto my-[25%]' style={{backgroundColor:"white"}}>
                <img src="brand-5.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default TopBrands