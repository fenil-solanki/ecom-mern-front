"use client"
import { useCartContext } from '@/context/CartContext'
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import CartItem from '../component/CartItem';
import { useUserContext } from '@/context/UserContext';
import Link from 'next/link';

const Page = () => {
    const {userCart}=useCartContext();
    const {isLoggedIn}=useUserContext()
    console.log(userCart)

  //  const sessionData:any=sessionStorage.getItem("user")

  if(isLoggedIn===false){
    return(
      <>
     <div>Please login to see your cart...</div>
      </>
    )
  }
   

  if(userCart.length==0){
    return(
      <>
        <div>No items in cart</div>
      </> )
  }


  return (
    <div className=''>
        <hr></hr>
        <table className='w-full'>
          <thead className='bg-[#3C4242]'>
            <tr style={{color:"white"}}>
              <th className='text-xs sm:text-lg'>PRODUCT DETAILS</th>
              <th className='hidden text-xs sm:text-lg md:table-cell'>PRICE</th>
              <th className='text-xs sm:text-lg'>QUANTITTY</th>
              <th className='hidden text-xs sm:text-lg md:table-cell'>SHIPPING</th>
              <th className='hidden text-xs sm:text-lg md:table-cell'>SUBTOTAL</th>
              <th className='text-xs sm:text-lg'>ACTION</th>
            </tr>
          </thead>
          <tbody className='container mx-auto py-3'>
            {
              userCart.map((curElem:any)=>{
                return <CartItem key={curElem.id} {...curElem}></CartItem>
              })
            }
          </tbody>
        </table>
        
        <section className='bg-[#F6F6F6]'>
              <div className='container mx-auto py-7 lg:py-11'>
                <div className='flex justify-end sm:justify-normal'>
                <div className='basis-0/2 sm:basis-1/2'>
                    <div className="hidden">
                  <p className='font-semibold'>Discount Codes</p>
                  <p>Enter your coupon code if you have one</p>
                  <div>
                    <input type="text" className='rounded-l-md p-2'/>
                    <button className='bg-[#8A33FD] rounded-r-md py-2 px-8' style={{color:"white"}}>Apply Coupon</button>
                  </div>
                  <button className='py-3 px-12 rounded-md border border-[#BEBCBD] decoration-[#3C4242] bg-[#fff]'><Link href="/products">Continue Shopping</Link></button>
                </div>
                    </div>
                <div className='basis-2/2 sm:basis-1/2'>
                  <div className='px-5 sm:px-0'>
                    <div>

                    <table className='mx-auto'>
                      <tr>
                        <td className='p-1 sm:p-1.5 md:p-2'>Sub Total </td>
                        <td className='p-1 sm:p-1.5 md:p-2'>$513.00</td>

                      </tr>

                      <tr>
                        <td className='p-1 sm:p-1.5 md:p-2'>Shipping </td>
                        <td className='p-1 sm:p-1.5 md:p-2'>$0.00</td>

                      </tr>

                      <tr>
                        <td className='py-2.5 px-1 sm:py-3 sm:px-2 md:py-4'>Grand Total </td>
                        <td className='py-2.5 px-1 sm:py-3 sm:px-2 md:py-4'>$518.00</td>

                      </tr>

                    </table>
                  <hr className='border-b-1 border-[#BEBCBD] w-[80%] mx-auto mt-3 mb-4 sm:w-[50%]'/>
                    </div>
                  <div className='text-center'>
                  <button className='bg-[#8A33FD] rounded-md  mx-auto font-medium p-2 text-base sm:p-2.5 sm:text-lg sm:font-semibold md:text-xl md:p-3' style={{color:"white"}}>Proceed To Checkout</button>

                  </div>
                  
                  </div>
                 
                </div>
                </div>
              
              </div>
                

            </section>

        
    </div>
  )
}

export default Page
