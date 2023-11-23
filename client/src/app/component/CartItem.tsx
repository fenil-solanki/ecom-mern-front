import React,{useState} from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'
import {FaPlus} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
import { useCartContext } from '@/context/CartContext'

const CartItem = ({id,image,name,price,color,amount,stock,size}:any) => {
  const {increaseItem,decreaseItem,removeItem}=useCartContext()
  const [productAmount, setproductAmount] = useState(amount)
  console.log(id)
  console.log(productAmount)

  const setDecrease=()=>{
    console.log(id)
    if(productAmount>1){
      setproductAmount((productAmount:number)=>productAmount-1)
      decreaseItem({id:id,productAmount:productAmount-1})
    }
    
  }

  const setIncrease=()=>{
    console.log(id)
    if(productAmount<stock){
      setproductAmount((productAmount:number)=>productAmount+1)
    increaseItem({id:id,productAmount:productAmount+1})
    }
    
  }

  return (
    <tr className='border-t-2 border-[#BEBCBD]'>
      <td className='text-center flex flex-row'>
        <div className='basis-2/6'>
        <img src={image} className='w-[75px] h-[85px] rounded-md inline sm:w-[105px] sm:h-[120px]'></img>

        </div>
        <div className='basis-4/6 text-left'>
          <div className='ml-2'>

        <p className='decoration-[#3C4242] font-semibold text-sm sm:text-lg md:text-xl md:font-bold'>{name}</p>
        <p className='rounded-full my-2 mx-0.5  border border-[#000] h-4 w-4 sm:mx-2 sm:h-5 sm:w-5 md:h-6 md:w-6' style={{backgroundColor:color}}></p>
        <p className=' font-semibold text-sm sm:text-lg md:text-xl md:font-bold'>Size : {size}</p>
        </div>

        </div>
        </td>
      <td className='text-center hidden md:table-cell'>{price}</td>
      <td className='text-center'><FaMinus className='inline' onClick={setDecrease}></FaMinus><span className='mx-1 text-lg sm:mx-4 sm:text-xl'>{productAmount}</span><FaPlus className='inline' onClick={setIncrease}></FaPlus></td>
      <td className='text-center hidden md:table-cell'>Free</td>
      <td className='text-center hidden md:table-cell'>{productAmount*price}</td>
      <td className='text-center'><RiDeleteBinLine className='inline' onClick={()=>removeItem(id)}></RiDeleteBinLine></td>
    </tr>
  )
}

export default CartItem
