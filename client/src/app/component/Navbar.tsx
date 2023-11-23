"use client"

import Link from 'next/link'
import React,{useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
 
  const [openMenu, setopenMenu] = useState(false)

  return (
    <header className="container mx-auto">
    <div>
      <div>
          <div>
            
          </div>
      </div>
      <div className='flex flex-row my-5'>

      <div className="basis-6/12 lg:basis-2/12">
        <Link href="/"><img src='logo.png' className='ml-[5%] lg:ml-[0%]' alt='sorry'></img></Link>
        </div>

      <div className='basis-6/12 lg:hidden text-right pr-8'>
        <AiOutlineMenu className='inline' onClick={()=>setopenMenu(true)}></AiOutlineMenu>
      </div>

      <div className='block fixed top-0 right-0 bg-[#fff] pt-4 pb-12 px-16  w-full h-full duration-500 z-20 lg:hidden' style={{transform: openMenu===true?`translate(0, 0)`:`translate(100%, 0)`}}>
        <ul className='text-center'>
              <li className='font-bold my-6 text-2xl sm:text-4xl sm:my-8'><Link href="/profile">Profile</Link></li>
              <li className='font-medium my-6 text-2xl sm:text-4xl sm:my-8' style={{color:"#807D7E"}}><Link href="/signup">Sign up</Link></li>
              <li className='font-medium my-6 text-2xl sm:text-4xl sm:my-8' style={{color:"#807D7E"}}><Link href="/login">Login</Link></li>
              <li className='font-medium my-6 text-2xl sm:text-4xl sm:my-8' style={{color:"#807D7E"}}><Link href="/products">Products</Link></li>
              <li className='font-medium my-6 text-2xl sm:text-4xl sm:my-8' style={{color:"#807D7E"}}><Link href="/cart">Cart</Link></li>
              <li className='font-medium my-6 text-2xl sm:text-4xl sm:my-8' onClick={()=>setopenMenu(false)}>Close</li>
          </ul>
      </div>

      <div>

      </div>
      <div className="md:basis-6/12 hidden lg:block">
        <ul className='flex flex-row justify-between px-6'>
            <li className='inline font-bold'><Link href="/profile">Profile</Link></li>
            <li className='inline font-medium' style={{color:"#807D7E"}}><Link href="/signup">Sign up</Link></li>
            <li className='inline font-medium' style={{color:"#807D7E"}}><Link href="/login">Login</Link></li>
            <li className='inline font-medium' style={{color:"#807D7E"}}><Link href="/products">Products</Link></li>
            <li className='inline font-medium' style={{color:"#807D7E"}}><Link href="/cart">Cart</Link></li>
        </ul>
      </div>
      
      <div className="md:basis-3/12 hidden lg:block bg-[#F6F6F6] px-6">
        <input type='text' placeholder='Search' className='inline w-[80%]'></input>
        <AiOutlineSearch className='inline'></AiOutlineSearch>
        </div>
      <div className="md:basis-2/12 hidden lg:block">
        <div className='flex flex-row justify-between px-[2%]'>
        <AiOutlineHeart className='bg-[#F6F6F6] inline basis-1/3 rounded h-5 w-5'></AiOutlineHeart>
        <BsPersonCircle className='bg-[#F6F6F6] inline basis-1/3 rounded h-5 w-5'></BsPersonCircle>
        <BsCart2 className='bg-[#F6F6F6] inline basis-1/3 rounded h-5 w-5'></BsCart2>
        </div>
        
      </div>
      </div>
    </div>
      <hr className='border border-[#BEBCBD]'/>
</header>
  )
}

export default Navbar
