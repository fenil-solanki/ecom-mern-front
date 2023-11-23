"use client"
import React, { useState } from 'react'

const Page = () => {
  const [image, setimage] = useState("")
  const handleSubmit=()=>{
    const data=new FormData()
    data.append("file",image)
    data.append("upload_preset","ofhv0epr")
    data.append("cloud_name","dvnqc9obh")
    fetch("https://api.cloudinary.com/v1_1/dvnqc9obh/image/upload",{
      method:"post",
      body:data
    }).then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <input type='file' onChange={(e)=>setimage(e.target.files[0])}></input>
      <button onClick={handleSubmit}>Submit</button>
      <img src='https://res.cloudinary.com/dvnqc9obh/image/upload/v1689849749/jcjfav2tvnefqzsyueyp.jpg'></img>
    </div>
  )
}

export default Page
