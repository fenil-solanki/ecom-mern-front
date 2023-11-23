import React from 'react'

const UserReducer = (state:any,action:any) => {
  switch(action.type){
    case "SET_USER":
        console.log(action.payload)
        // console.log(action.payload.cart[0].cart)

        return{
            ...state,
            userInfo:action.payload.user[0],
            // userCart:action.payload.cart[0].cart,
            userEmail:action.payload.user[0].email,
            isLoggedIn:true
        }

    case "REMOVE_USER":
        return{
          ...state,
          userInfo:[],
          userEmail:"",
          // userCart:[],
          isLoggedIn:false,
        }

    default:
        return state
  }
}

export default UserReducer