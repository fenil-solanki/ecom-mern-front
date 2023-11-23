'use client'
import { createContext, useContext, useEffect ,useReducer} from "react";
import reducer from "../reducer/UserReducer"
import axios from "axios";
import { useCartContext } from "./CartContext";

const initialState:any={
    userInfo:[],
    userEmail:"",
    // userCart:[],
    isLoggedIn:false,
}
const UserContext=createContext(initialState)


const UserProvider=({children}:any)=>{
    // const {setData}=useCartContext();
    // console.log(setData)
    const [state, dispatch]:any = useReducer(reducer, initialState)
    // console.log(userTempCart)

    useEffect(()=>{
        if(state.isLoggedIn){
            console.log("User logged in......")
            sessionStorage.setItem("user",state.userEmail)
        }
        
    },[state.isLoggedIn])

    const findByEmail=async(email:String)=>{
        try{
            const userdata:any={
                email
            }
            console.log("User data from fornt end : ",userdata)
            const res = await axios.get("http://localhost:5000/finduseremail", {params: userdata})
            const userData=await res.data;
            console.log(userData)

            handleLogin(userData)
        }catch(e){
            console.log("Sorry, something went wrong.")
        }
    }

    useEffect(()=>{
        const email:any=sessionStorage.getItem("user")
        if(email!=="" || email.length!==0){
        findByEmail(email)   
        }
    },[])

    const handleSignup=()=>{

    }


    const handleLogin=(userData:any)=>{
        console.log(userData)
        const exist:any=localStorage.getItem(userData.user[0].email)
        const existCart:any=JSON.parse(exist);
        console.log(existCart)
        // console.log(existCart.length)
        if((existCart==null || existCart==undefined) || existCart.length==0){
            console.log("if called")
            console.log(userData.user)
            console.log(userData.user[0])
            console.log(userData.user[0].email)
            localStorage.setItem(userData.user[0].email,JSON.stringify([]))
        }else{
            console.log("Else called")
            dispatch({type:"SET_USER",payload:userData})
            const data:any=localStorage.getItem(userData.user[0].email);
            const orgData=JSON.parse(data)
            // setCart(orgData)
        }
        dispatch({type:"SET_USER",payload:userData})
    }

    // const updateUserCart=async(userTempCart:any)=>{
    //     try{
    //         console.log(userTempCart)
    //         const res = await axios.put("http://localhost:5000/updatecart", {_id:state.userInfo._id,email:state.userEmail,cart:userTempCart})
    //         console.log(res)
    //     }catch(e){
    //         console.log(e)
    //     }
    // }

   const handleLogOut=()=>{
    //     console.log(state.userCart.length)
    //     console.log(userTempCart2.length)
    //     if(state.userCart.length!=userTempCart2.length){
    //    const updatedTempCart=userTempCart2.map((curElem:any)=>{
    //     if('_id' in curElem){
    //         console.log("_id is present")
    //         console.log(curElem)
    //         delete curElem['_id']
    //         return curElem
    //     }
    //     return curElem
    //    }
    //    )
    //    console.log(updatedTempCart)
    // localStorage.removeItem(state.userEmail);
        // updateUserCart(updatedTempCart)
        // }
        dispatch({type:"REMOVE_USER"})  
   } 

    return(
        <UserContext.Provider value={{...state,handleSignup,handleLogin,handleLogOut}}>{children}</UserContext.Provider>
    )
}

const useUserContext=()=>{
    return useContext(UserContext)
}

export {UserContext,UserProvider,useUserContext}
