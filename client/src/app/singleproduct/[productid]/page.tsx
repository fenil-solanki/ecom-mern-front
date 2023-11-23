'use client'
import React, { useEffect,useState } from 'react'
import {usePathname, useRouter} from 'next/navigation'
import { useAppContext } from '@/context/AppContext'
import { useCartContext } from '@/context/CartContext'
import SingleProductImages from '@/app/component/SingleProductImages'
import {BiCommentDetail} from 'react-icons/bi'
import {PiShoppingCartSimpleBold} from 'react-icons/pi'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {GiTShirt} from 'react-icons/gi'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {RiArrowUpDownFill} from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useUserContext } from '@/context/UserContext'
import RatingStar from '@/app/component/RatingStar'
const Page = () => {
    const pathname=usePathname()
    const url=pathname
    const substringToRemove = '/singleproduct/';
    const product_id = url.split(substringToRemove).join('');
    const {isLoggedIn}:any=useUserContext()
    const {getSingleProduct,singleProductLoading,singleProduct}:any=useAppContext();

    const {addProductCart}=useCartContext()
    const [selectedColor, setselectedColor] = useState()
    const [selectedSize,setselectedSize]=useState()
    const [amount, setamount] = useState(1)
    

   
    const setDecrease=()=>{
      if(amount>1){
      setamount((amount)=>amount-1)
      }
    }
  
    const setIncrease=()=>{
      if(amount<singleProduct.stock){
        setamount((amount)=>amount+1)

      }
    }

    const handleCart=()=>{
      if(singleProduct!==undefined || singleProduct!==null){
        if(isLoggedIn===true){
    
      let product_price;
      console.log("Color : ",selectedColor)
        if(singleProduct.discount_price===undefined || singleProduct.discount_price==0 || singleProduct.discount_price===null){
          product_price=singleProduct.actual_price
        }else{
          product_price=singleProduct.discount_price
        }
        console.log("product_price",product_price)
        const product={id:singleProduct.id.concat(selectedColor),name:singleProduct.name,price:product_price,image:singleProduct.image[singleProduct.image.length-1],color:selectedColor,amount:amount,stock:singleProduct.stock,size:selectedSize}
      addProductCart(product)
        }else{
          alert("Please login to add items in cart.")
        }
      
      
    }
    }

    

  

    useEffect(()=>{
      if(singleProduct!==undefined){
      if(singleProduct.color && singleProduct.color.length && singleProduct.color[0]!==undefined){
        setselectedColor(singleProduct.color[0])

        }
        if(singleProduct.sizes && singleProduct.sizes.length && singleProduct.sizes[0]!==undefined){
          setselectedSize(singleProduct.sizes[0])
  
          }
      }
    },[singleProduct])

    useEffect(()=>{
      getSingleProduct(product_id)
     

    },[])

    if(singleProductLoading==true || singleProduct===undefined || singleProduct===null || Object.keys(singleProduct).length === 0){
      return <div>Loading...</div>
    }else{
      return (

        <div>
          <section className='grid grid-cols-12'>
            <div className='col-span-12 sm:col-span-6'>
              <SingleProductImages images={singleProduct.image}></SingleProductImages>
            </div>
            <div className='col-span-12 pt-8 pb-12 px-4 sm:pt-14 sm:px-10 sm:col-span-6'>
              <p style={{color:"#807D7E"}} className='text-base lg:text-lg'>Shop{'>'}Women{'>'}Top</p>
            <h3 className='font-medium text-2xl my-3.5 lg:text-3xl lg:font-semibold lg:my-4'>{singleProduct.name} {singleProduct.company}</h3>
            <div>
               
              <RatingStar stars={singleProduct.stars} mar={2} size={22}></RatingStar>

              
              <span style={{color:"#807D7E"}} className='text-sm lg:text-base'>{singleProduct.stars}</span>
              <div className='inline text-sm lg:text-base'>
              <BiCommentDetail className='inline' style={{color:"#807D7E"}}></BiCommentDetail>
             <span style={{color:"#807D7E"}}>{singleProduct.reviews} comments</span> 
              </div>
              
            </div>
    
    
            <div className='w-[100%] xl:w-[80%] 2xl:w-[50%] my-6 lg:my-8'>
              <p className='inline text-lg lg:text-xl' style={{color:"#3F4646"}}>Select Size</p>
              <p className='inline text-lg ml-4 lg:text-xl' style={{color:"#807D7E"}}>Size Guide</p>
    
              <div className='my-6 lg:my-10'>
                {
                   singleProduct.sizes !== undefined && singleProduct.sizes.length !==0 && singleProduct.sizes?
                  singleProduct.sizes.map((curSize:any)=>{
                    return  curSize===selectedSize?<button key={curSize} className='border-2 bored-[#BEBCBD] rounded rounded-lg inline m-2 h-8 w-8 text-base lg:text-xl lg:w-10 lg:h-10 border border-[#000] bg-[#000]'onClick={()=>setselectedSize(curSize)} style={{color:"#fff"}}>{curSize}</button>:<button key={curSize} className='border-2 bored-[#BEBCBD] rounded rounded-lg inline m-2 h-8 w-8 text-base lg:text-xl lg:w-10 lg:h-10 border border-[#000]'onClick={()=>setselectedSize(curSize)}>{curSize}</button>
                  }):null
                }
          
              </div>
            </div>
    
    
            <div>
              <h3 className='font-semibold text-base lg:text-lg' style={{color:"#3F4646"}}>Colours Available </h3>
              <div className='my-4 lg:my-5'>
              
              {
             singleProduct.color !== undefined && singleProduct.color.length !==0 && singleProduct.color?
             singleProduct.color.map((curColor:any)=>{
               return curColor===selectedColor?<button key={curColor} className='rounded-full h-6 w-6 mx-2' style={{backgroundColor:curColor}} onClick={()=>setselectedColor(curColor)}><TiTick></TiTick></button>:<button key={curColor} onClick={()=>setselectedColor(curColor)} className='rounded-full h-6 w-6 mx-2' style={{backgroundColor:curColor}}></button>
              
              
             }):null
      
                
              }
    
    </div>
            </div>
    
    
            <div>
              <h3 className='font-semibold text-base lg:text-lg' style={{color:"#3F4646"}}>Amount</h3>
              <div className='my-4 lg:my-5'>
              <FaMinus className='inline' onClick={setDecrease}></FaMinus>
              <span className='mx-4'>{amount}</span>
              <FaPlus className='inline' onClick={setIncrease}></FaPlus>
    
    </div>
            </div>
    
              <div className='w-[100%] xl:w-[80%] 2xl:w-[50%] mt-10 grid grid-cols-1 gap-2 md:mt-0 md:grid-cols-2'>
                <button className='font-semibold bg-[#8A33FD] py-3 rounded-md' style={{color:"fff"}} onClick={handleCart}>
                  <PiShoppingCartSimpleBold className='inline mr-2' style={{color:"fff"}} size={24}></PiShoppingCartSimpleBold>
                 <span style={{color:"white"}} className='text-lg'>Add to cart</span>
                  </button>
                <button className='font-semibold  py-2 text-lg border border-[#3C4242] rounded-md'>$63.00</button>
              </div>
    
              <hr className='border border-[#BEBCBD] my-10 lg:my-12'/>
    
    
              <div>
                <div className='grid grid-cols-1 gap 5 lg:grid-cols-2'>
                    <div>
                      <RiSecurePaymentFill className='inline mr-5' style={{color:"#3C4242"}}></RiSecurePaymentFill>
                      <p className='inline text-base' style={{color:"#3C4242"}}>Secure payment</p>
                    </div>
                    <div>
                      <GiTShirt className='inline mr-5' style={{color:"#3C4242"}}></GiTShirt>
                      <p className='inline text-base' style={{color:"#3C4242"}}>Size & Fit</p>
                    </div>
                </div>
    
                <div className='grid grid-cols-1 gap 5 lg:grid-cols-2 '>
                    <div>
                      <LiaShippingFastSolid className='inline mr-5' style={{color:"#3C4242"}}></LiaShippingFastSolid>
                      <p className='inline text-base' style={{color:"#3C4242"}}>Free shipping</p>
                    </div>
                    <div>
                      <RiArrowUpDownFill className='inline mr-5' style={{color:"#3C4242"}}></RiArrowUpDownFill>
                      <p className='inline text-base' style={{color:"#3C4242"}}>Free Shipping & Returns</p>
                    </div>
                </div>
              </div>
    
            </div>
          </section>
        
    
          </div>
      )
    }

  
}

export default Page
