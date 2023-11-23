"use client"
import React,{useState} from 'react'
import axios from 'axios'
import {FcGoogle} from 'react-icons/fc'
import {IoLogoTwitter} from 'react-icons/io'
import Link from 'next/link'

const Page = () => {
  const [name, setname] = useState("")
  const [surname, setsurname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const changeData=(e:any)=>{
    if(e.target.name=="name"){
      setname(e.target.value)
    }else if(e.target.name=="surname"){
        setsurname(e.target.value)
    }else if(e.target.name=="email"){
      setemail(e.target.value)
    }else if(e.target.name=="password"){
      setpassword(e.target.value)
    }
  }

   const validateUserData=()=>{
    let result=true;

    // for validate name

    var regex = /^[^\s][a-zA-Z\s]+[^\s]$/;
   if(name.match(regex))
     {
      result=true;
     }
   else
     {
     alert("Please enter valid name!");
     false;
     return false;
     }


   

      // for validate email

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        result=true;
      }else{
        alert("You have entered an invalid email address!")
        return false
      }

      // for validate password
       
      var minNumberofChars = 6;
      var maxNumberofChars = 16;
      var regularExpression  = /^[\w@#&]+$/;
      if(password.length < minNumberofChars || password.length > maxNumberofChars){
          alert("Your password length is not valid !")
          return false;
      }
      if(!regularExpression.test(password)) {
          alert("password should contain atleast one number and one special character");
          return false;
      }

      return result
     
   }

  const submitData=async(e:any)=>{
    e.preventDefault()
    setname("")
    setemail("")
    setpassword("")
    const result=validateUserData()

    if(result===true){
      try{
        const userData={name,email,password}
        console.log(userData)
        const res:any = await axios.post("https://ecom-mern-server.vercel.app/adduser", userData)
        const data=await res.data
        console.log(res)
        console.log(data)
        alert("Your data is submitted successfully.")
      }catch(e){
        console.log(e)
        alert("Sorry, something went wrong.")
      }
    }
   
  }

  return (
    <>
   <div className='md:flex md:flex-row'>
     <div className='basis-0/2 hidden md:block md:basis-1/2'>
      <img src="betterfashion-2.png" className='w-full h-full' alt="" />
     </div>
   <div className='basis-2/2 md:basis-1/2 px-10 sm:px-20 md:px-4 py-4'>
       <form className="login md:px-8 lg:px-16 xl:px-24" onSubmit={submitData}>
 <h2 className='font-semibold text-3xl '>Sign Up</h2>
 <p style={{color:"#666666CC"}} className='text-sm font-medium'>Sign up for free to access to in any of our products </p>
 <div>
 <button className='border border-[#3C4242] block p-2 rounded-lg text-[#8A33FD] w-full mt-6 lg:p-3'><FcGoogle className='inline'></FcGoogle> Continue With Google</button>
 <button className='border border-[#3C4242] block p-2 rounded-lg text-[#8A33FD] w-full mt-6 lg:p-3'><IoLogoTwitter className='inline text-[#47ACDF]'></IoLogoTwitter> Continue With Twitter</button>
 </div>
   
   <div className='my-4'>
   <label htmlFor="name" className='block text-lg'>Name:</label>
  <input  type="text"  name="name" className="w-full bg-transparent border border-[#3C4242] py-1 px-2 rounded-md mt-2" style={{color:"#000"}} id="name" onChange={changeData} required/>




      <label htmlFor="email" className='block text-lg'>Email :</label>
  <input  type="text"  name="email" className="w-full bg-transparent border border-[#3C4242] py-1 px-2 rounded-md mt-2" style={{color:"#000"}} id="email" onChange={changeData} required/>


      <label htmlFor='password' className='block text-lg'>Password :</label>
  <input  type="text"  name="password" className="w-full bg-transparent border border-[#3C4242] py-1 px-2 rounded-md mt-2" style={{color:"#000"}} id="password" onChange={changeData} required/>
    <p style={{color:"#807D7E"}} className='text-xs mt-2 font-medium'>Use 8 or more characters with a mix of letters, numbers & symbols</p>


 </div>

 <div>

  <div>
  <input type="checkbox" id="" name="" className='checkTick h-[14px] w-[14px] inline' value="" />
 <p style={{color:"#807D7E"}} className='text-base ml-2 font-normal inline'>Agree to our <Link href="/signup" className='underline'> Terms of use </Link> and <Link href="/signup" className='underline'>Privacy Policy</Link></p>
  </div>

 <div>
 <input type="checkbox" id="" name="" className='checkTick h-[14px] w-[14px] inline' value="" />
 <p style={{color:"#807D7E"}} className='text-base ml-2 font-normal inline'>Subscribe to our monthly newsletter</p>
 </div>

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
