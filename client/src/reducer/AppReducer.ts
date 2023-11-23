import React from 'react'

const AppReducer = (state:any,action:any) => {
  switch(action.type){
    case "SET_API_LOADING":
        return{
            ...state,
            apiloading:true
        }
    case "SET_API_PRODUCTS":
        console.log(action.payload)
        const featureproduct=action.payload.filter((curElem:any)=>{
            if(curElem.featured===true){
                return curElem
            }
        })
        return{
            ...state,
            apiloading:false,
            products:action.payload,
            featuredProduct:featureproduct
        }
    case "SET_API_ERROR":
        return{
            ...state,
            apiloading:false,
            apierror:true
        }

    case "SET_SINGLE_LOADING":
        return{
            ...state,
            singleProductLoading:true
        }

    case "SET_SINGLE_PRODUCT":
        return{
            ...state,
            singleProductLoading:false,
            singleProduct:action.payload
        }

    case "SET_SINGLE_ERROR":
        return{
            ...state,
            singleProductLoading:false,
            singleProductError:true
        }

    default:
        return state
  }
}

export default AppReducer