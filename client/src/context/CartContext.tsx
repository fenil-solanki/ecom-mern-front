'use client'
import { createContext, useContext, useEffect ,useReducer} from "react";
import reducer from "../reducer/CartReducer"
import axios from "axios";
import { useUserContext } from "./UserContext";

const initialState:any={
    userCart:[],
}
const CartContext=createContext(initialState)


const CartProvider=({children}:any)=>{
    const {isLoggedIn,userEmail,userCart}=useUserContext();
    const [state, dispatch]:any = useReducer(reducer, initialState)

    const setData=(cartData:any)=>{
        console.log(cartData)
        dispatch({type:"SET_USER_CART",payload:cartData})
        console.log("done")
    }

    const addProductCart=(product:any)=>{
        dispatch({type:"ADD_NEW_PRODUCT",payload:product})
    }

    const increaseItem=({id,productAmount}:any)=>{
        console.log("increasae item called.")
        console.log(id)
        console.log(productAmount)
        dispatch({type:"INCREASE_ITEM",payload:{id,productAmount}})
    }

    const decreaseItem=({id,productAmount}:any)=>{
        console.log("decrease item called.")
        console.log(id)
        console.log(productAmount)
        dispatch({type:"DECREASE_ITEM",payload:{id,productAmount}})
    }

    const removeItem=(id:string)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    useEffect(()=>{
        // const sessionData:any=sessionStorage.getItem('cart')
        // const orgData:any=JSON.parse(sessionData)
        // const mix_Data=orgData.concat(state.userCart)
        if(isLoggedIn===true){
            console.log("Local storage set")
            // const data:any=localStorage.getItem(userEmail)
            // const orgData=JSON.parse(data)
            // orgData.push()
            localStorage.setItem(userEmail,JSON.stringify(state.userCart))
        }
    },[state.userCart])

    useEffect(()=>{
        if(isLoggedIn==true){
            console.log("USeeffect for set cart data is called,")
            console.log(userEmail)
            const data:any=localStorage.getItem(userEmail);
            // console.log(data)
            const orgData=JSON.parse(data)
            setData(orgData)
        }
    },[isLoggedIn])

    return(
        <CartContext.Provider value={{...state,setData,addProductCart,increaseItem,decreaseItem,removeItem}}>{children}</CartContext.Provider>
    )
}

const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartContext,CartProvider,useCartContext}