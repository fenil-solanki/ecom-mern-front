"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Page = () => {

  const [productDetail, setProductDetail] = useState<any>(
    {
      id: Date.now().toString(),
      name: "",
      company: "",
      category: "",
      type: "",
      style: "",
      color: [],
      image: [],
      description: "",
      actual_price: "0",
      discount_price: "0",
      discount_rate: "0",
      sizes: [],
      new: false,
      short_descritiption: "",
      stock: 0,
      reviews: 0,
      stars: 0.0
    })

  const [isUpload, setisUpload] = useState(false)

  const serverpath = "https://ecom-mern-server.vercel.app/images/"

  function get_user_image_url(arr:any,data64: any) {
    fetch("https://ecom-mern-server.vercel.app/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageData: data64 }),
    })
      .then((res) => res.json())
      .then((data) => { 
        arr.push(serverpath + data.message)
      productDetail.image.push(serverpath + data.message)
       }
      );
  }

  var ArrayOfImageUrl: any = []
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name)
    if (name === "image") {
      ArrayOfImageUrl = [...e.target.files]
      console.log("Product details :", productDetail)
      console.log(ArrayOfImageUrl)
      const dataImage = [...ArrayOfImageUrl]
      let arr: any = []
      
      dataImage.map(async (val, i) => {
        var base64Image: any = "";
        const filereader = new FileReader();
        filereader.onload = (file) => {
          base64Image = file.target?.result;
        };
        filereader.readAsDataURL(val);
        
        setTimeout(() => {
          get_user_image_url(arr,base64Image);
        }, 50);
      })
      
      console.log(arr)
      console.log(productDetail)
    console.log("Final product detail : ", productDetail)
  }else if (name === "color" || name === "sizes") {
    const data = value.split(",")
    setProductDetail({ ...productDetail, [name]: data })
  } else {
    setProductDetail({ ...productDetail, [name]: value })
  }



}



const handleUpload = async (e: any) => {

  e.preventDefault()

  
  try {
    const res = await axios.post("https://ecom-mern-server.vercel.app/postproduct", productDetail)
    const data = await res.data
    console.log(res)
    console.log(data)
    alert("Request Posted Successfully.")
    setProductDetail({...productDetail,id: "",
    name: "",
    company: "",
    category: "",
    type: "",
    style: "",
    color: [],
    image: [],
    description: "",
    actual_price: "0",
    discount_price: "0",
    discount_rate: "0",
    sizes: [],
    new: false,
    short_descritiption: "",
    stock: 0,
    reviews: 0,
    stars: 0.0})
  } catch (e) {
    console.log(e)
    alert("Sorry, something went wrong, your product request is not sent...")
  }

}





return (
  <div className='container mx- p-8'>
    {/* <form onSubmit={handleUpload} encType="multipart/form-data">

      <label htmlFor="id">Enter product Id :</label>
      <input type="text" onChange={handleChange} name="id" placeholder='Enter product id :' required /><br />

      <label htmlFor="name">Enter product name :</label>
      <input type="text" onChange={handleChange} name="name" required /><br />

      <label htmlFor="company">Enter product company :</label>
      <input type="text" onChange={handleChange} name="company" /><br />

      <label htmlFor="category">Enter product category :</label>
      <input type="text" onChange={handleChange} name="category" required /><br />

      <label htmlFor="type">Enter product type :</label>
      <input type="text" onChange={handleChange} name='type' required /><br />

      <label htmlFor="style">Enter product dress style :</label>
      <input type="text" onChange={handleChange} name="style" /><br />

      <label htmlFor="color">Enter product color :(enter with it's hexacode and seprated by (,))</label>
      <input type="text" onChange={handleChange} name="color" required /><br />

      <input type="file" name="image" onChange={handleChange} multiple required />
      <button onClick={handleUpload}>Upload</button><br />

      <label htmlFor="description">Enter product description</label>
      <input type="text" onChange={handleChange} name="description" /><br />

      <label htmlFor="actual_price">Enter product actual price :</label>
      <input type="text" onChange={handleChange} name='actual_price' required /><br />

      <label htmlFor="discount_price">Enter product discount price :</label>
      <input type="text" onChange={handleChange} name='discount_price' /><br />

      <label htmlFor="discount_rate">Enter product discount percentage :</label>
      <input type="text" onChange={handleChange} name='discount_rate' /><br />

      <label htmlFor="sizes">Enter product available sizes :</label>
      <input type="text" onChange={handleChange} name='sizes' required /><br />

      <label htmlFor="new">Is product in new category :</label>
      <input type="text" onChange={handleChange} name='new' /><br />

      <label htmlFor="short_descritiption">Enter product short descritiption :</label>
      <input type="text" onChange={handleChange} name='short_descritiption' required /><br />

      <label htmlFor="stock">Enter available product stock :</label>
      <input type="text" onChange={handleChange} name='stock' required /><br />

      <label htmlFor="reviews">Enter number of product reviews :</label>
      <input type="text" onChange={handleChange} name="reviews" /><br />

      <label htmlFor="stars">Enter number of stars for product :</label>
      <input type="text" onChange={handleChange} name='stars' />
    </form> */}


    
    <form id="contact" className='w-[50%]' style={{margin:"auto"}}  onSubmit={handleUpload} encType="multipart/form-data">
    <h3>Add New Product</h3>
    <h4>Contact us for custom quote</h4>
    {/* <fieldset>
    <input type="text" onChange={handleChange} name="id" placeholder='Your Product Id :' required /><br />
    </fieldset> */}
    <fieldset>
    <input type="text" onChange={handleChange} name="name"  placeholder="Your Product Name" required /><br />
    </fieldset>
    <fieldset>
    <input type="text" onChange={handleChange} name='company' placeholder="Your Product Company" /><br />
    </fieldset>
    <fieldset>
    <input type="text" onChange={handleChange} name='categroy' placeholder="Your Product Category" required /><br />
    </fieldset>
    <fieldset>
    <input type="text" onChange={handleChange} name='type' placeholder='Your Product Type' required /><br />
    </fieldset>
    <fieldset>
    <input type="text" onChange={handleChange} name="style" placeholder='Your Product Dress Style' /><br />
    </fieldset>
    <fieldset>
    <input type="text" onChange={handleChange} name="color" placeholder="Enter product color :(enter with it's hexacode and seprated by (,))" required /><br />
    </fieldset>

    <fieldset>
    <input type="file" name="image" onChange={handleChange} multiple required />
      <button onClick={handleUpload}>Upload</button><br />
    </fieldset>


    <fieldset>
      <textarea onChange={handleChange} name="description" placeholder='Your Product Description...' required></textarea>
    </fieldset>
    
    <fieldset>
    <input type="text" onChange={handleChange} name='actual_price' placeholder='Your Product Actual Price' required /><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name='discount_price' placeholder='Your Product Discount Price (optional)'/><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name='discount_rate' placeholder='Your Product Discount Rate (optional)' /><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name='sizes' required placeholder='Available Sizes For Your Product' /><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name='new' placeholder='Is Your Product In New Category? (optional)'/><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name='short_descritiption' required placeholder='Your Product Short Description'/><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name='stock' required placeholder='Your Product Stock' /><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name="reviews" placeholder='Your Product Reviews'/><br />
    </fieldset>

    <fieldset>
    <input type="text" onChange={handleChange} name='stars' placeholder='Your Product Stars' />
    </fieldset>
   
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending"  onClick={handleUpload}>Submit</button>
    </fieldset>

  </form>
    </div>

)
}

export default Page
