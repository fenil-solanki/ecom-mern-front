'use client'
import { createContext, useContext, useEffect ,useReducer} from "react";
import reducer from "../reducer/AppReducer"
import axios from "axios";

const initialState:any={
    apiloading:false,
    apierror:false,
    products:[],
    featuredProduct:[],
    singleProductLoading:false,
    singleProductError:false,
    singleProduct:{}
}
const AppContext=createContext(initialState)

const API="http://localhost:5000/products"

const AppProvider=({children}:any)=>{
    const [state, dispatch]:any = useReducer(reducer, initialState)

    const getProducts=async(url:any)=>{
        dispatch({type:"SET_API_LOADING"})
        try{
            const res=await axios.get(url);
            const data=await res.data;
            dispatch({type:"SET_API_PRODUCTS",payload:data})
            console.log(res)
            console.log(data)
        }catch(e){
            dispatch({type:"SET_API_ERROR"})
            console.log(e)
        }
    }

    const getSingleProduct=async(id:any)=>{     
        dispatch({type:"SET_SINGLE_LOADING"})
        try{
            const res=await axios.get(`http://localhost:5000/products/${id}`);
            const data=await res.data;
            console.log(res)
            console.log(data)
            dispatch({type:"SET_SINGLE_PRODUCT",payload:data})
        }catch(e){
            dispatch({type:"SET_SINGLE_ERROR"})
            console.log(e)
        }
    }

   
    // const setSingleProduct=(product:any)=>{
    //     dispatch({type:"SET_SINGLE_PRODUCT",payload:product})
    // }

    useEffect(()=>{
        
        getProducts(API);
        console.log("before")
            sessionStorage.setItem("cart",JSON.stringify([]))
            console.log("After")
    },[])
    return(
        <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>
    )
}

const useAppContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useAppContext}
