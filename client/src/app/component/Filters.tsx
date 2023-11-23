// import React from 'react'

// const Filters = () => {
//   return (
//     <section className='px-5'>
//     <div className=''>
//       <div className='mt-8 mb-12 grid grid-cols-2'>
//       <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Filter</h3>
//       <div>

//       <img src="filter.png" alt="" className='inline'/>
//       </div>

//       </div>
//       <div className=''>

//         {
//           unique_types.map((curType:any)=>{
//             return <DressTypes type={curType}></DressTypes>
//           })
//         }


//       </div>
      
//     </div>



//   <div className=''>
//     <div className='mt-8 mb-5'>
//     <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Price</h3>
//     </div>
//     <hr className='mb-8 decoration-[#BEBCBD]'/>
//     <div>
//   <input type="range" name="price" min={minimum_price} max={maximum_price} value={filters.price} onChange={updateFilterValue}/>
//   <div className='grid grid-cols-2 gap-3 mt-6'>
//       <div>
//       <button className='rounded-lg border border-[#BEBCBD] px-5 py-2' style={{color:"#3C4242"}}><span>${minimum_price}</span></button>
//       </div>
//       <div>
//       <button className='rounded-lg border border-[#BEBCBD] px-5 py-2' style={{color:"#3C4242"}}><span>${maximum_price}</span></button>
//       </div>

//   </div>
//     </div>
//   </div>


//   <div className=''>
//     <div className='mt-8 mb-5'>
//     <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Sizes</h3>
//     </div>
//     <hr className='mb-8 decoration-[#BEBCBD]'/>
//     <div className='grid grid-cols-4 px-5'>
//       {
//         uniqueSizes.map((curSize:any)=>{
//             return(
//                <button name="size" onClick={updateFilterValue} value={curSize} className='h-9 w-9 rounded rounded-lg mb-4 border-2 border-[#000]'>
//                   {curSize}
//                </button>)
//         })
//       }
//     </div>
//   </div>


//     <div className=''>
//     <div className='mt-8 mb-5'>
//     <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Colors</h3>
//     </div>
//     <hr className='mb-8 decoration-[#BEBCBD]'/>
//     <div className='grid grid-cols-4 px-5'>
//       {
//         uniqueColors.map((curColor:any)=>{
//             return(
//                <button name="color" onClick={updateFilterValue} value={curColor} className='h-9 w-9 rounded rounded-lg mb-4 border-2 border-[#000]' style={{backgroundColor:curColor}}>

//                </button>)
//         })
//       }
//     </div>
//   </div>






// <div className=''>
//       <div className='mt-8 mb-12 grid grid-cols-2'>
//       <h3 className='inline font-semibold text-2xl' style={{color:"#807D7E"}}>Company</h3>
//       <div>

//       <img src="filter.png" alt="" className='inline'/>
//       </div>

//       </div>
//       <div className=''>

//         {
//           uniqueCompanies.map((curCompany:any)=>{
//             return <Companies company={curCompany}></Companies>
//           })
//         }


//       </div>
      
//     </div>


//     <div>
//       <button onClick={clearFilter}>Clear Filter</button>
//     </div>

//   </section>
//   )
// }

// export default Filters