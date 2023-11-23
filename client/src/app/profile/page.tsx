"use client"
import { useUserContext } from '@/context/UserContext'
import React from 'react'
import Navbar from '../component/Navbar'
import { useCartContext } from '@/context/CartContext'

const Page = () => {
   const {isLoggedIn,userInfo,handleLogOut}=useUserContext()
   
   if(isLoggedIn===false){
    return( 
    <div>
       <div>Please Log in...</div>
        </div>
   )
}
   return (
    <div>
        <p>Username : {userInfo.name}</p>
        <p>Email : {userInfo.email}</p>
        <button onClick={()=>handleLogOut()}>Log out</button>
    </div>
  )
}

export default Page
