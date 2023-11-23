"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import {FcGoogle} from 'react-icons/fc'
import {IoLogoTwitter} from 'react-icons/io'
import { useUserContext } from '@/context/UserContext'
import Link from 'next/link'
const Page = () => {
  const {userCart,handleLogin,userInfo,userEmail}=useUserContext()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const handleChange=(e:any)=>{
            if(e.target.name=="email"){
                setemail(e.target.value)

            }else if(e.target.name="password"){
                setpassword(e.target.value)

            }
    }

    const validateEmail=()=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
          {
            return (true)
          }
            alert("You have entered an invalid email address!")
            return (false)
    }

    const validatePassword=()=>{
      var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression  = /^[\w@#&]+$/
    if(password.length < minNumberofChars || password.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.test(password)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
    return true
    }
 

    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        const correctEmail=validateEmail()
        const correctPassword=validatePassword()

        console.log(email)
        console.log(password)



        if(correctEmail==true && correctPassword==true){

        try{
            const userdata:any={
                email,
                password
            }
            console.log("User data from fornt end : ",userdata)
            const res = await axios.get("https://ecom-mern-server.vercel.app/finduser", {params: userdata})
            const userData=await res.data;
            console.log(userData)

            setemail("")
            setpassword("")
          
            handleLogin(userData)
        }catch(e){
            alert("Sorry, something went wrong.")
        }
      }
    }
   
    return (
      <>
     <div className='md:flex md:flex-row'>
       <div className='basis-0/2 hidden md:block md:basis-1/2'>
        <img src="sign-in-image.png" alt="sorry" className='w-full h-auto'/>
       </div>
     <div className='basis-2/2 md:basis-1/2 px-10 sm:px-20 md:px-4 py-4'>
         <form className="login md:px-8 lg:px-16 xl:px-24" onSubmit={handleSubmit}>
   <h2 className='font-semibold text-3xl '>Sign Up</h2>
   <p style={{color:"#666666CC"}} className='text-sm font-medium'>Sign up for free to access to in any of our products </p>
   <div>
   <button className='border border-[#3C4242] block p-2 rounded-lg text-[#8A33FD] w-full mt-6 lg:p-3'><FcGoogle className='inline'></FcGoogle> Continue With Google</button>
   <button className='border border-[#3C4242] block p-2 rounded-lg text-[#8A33FD] w-full mt-6 lg:p-3'><IoLogoTwitter className='inline text-[#47ACDF]'></IoLogoTwitter> Continue With Twitter</button>
   </div>
     
     <div className='my-4'>
    
  
  
  
        <label htmlFor="email" className='block text-lg'>Email :</label>
    <input  type="text"  name="email" className="w-full bg-transparent border border-[#3C4242] py-1 px-2 rounded-md mt-2" style={{color:"#000"}} id="email" onChange={handleChange} required/>
  
  
        <label htmlFor='password' className='block text-lg'>Password :</label>
    <input  type="text"  name="password" className="w-full bg-transparent border border-[#3C4242] py-1 px-2 rounded-md mt-2" style={{color:"#000"}} id="password" onChange={handleChange} required/>
  
  
   </div>
 
  
  
   <input className='py-2 px-16 bg-[#8A33FD] rounded-lg text-lg my-[12px]' style={{color:"white"}} type="submit" value="Sign Up" />
   <p className='text-xs font-normal' style={{color:"#3C4242"}}>Don’t have an account? <Link href="/login" className='underline'> Log in </Link> </p>
  </form>
  </div>
     </div>
      </>
    )
}

export default Page
