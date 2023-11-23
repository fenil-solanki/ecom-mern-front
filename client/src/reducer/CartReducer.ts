import React from 'react'

const CartReducer = (state:any,action:any) => {
  switch(action.type){
    // case "SET_USER_CART":
    //     console.log(action.payload)

    //     return{
    //         ...state,
    //         userCart:action.payload,
    //         userCart:action.payload
    //     }

    case "SET_USER_CART":
        return{
            ...state,
            userCart:action.payload
        }

    case "ADD_NEW_PRODUCT":
        
        console.log(action.payload)

        // const {singleProduct,selectedColor}=action.payload
        const newSingleProduct={...action.payload};
        console.log("Single product : ",newSingleProduct)
        // newSingleProduct.color=selectedColor
        // newSingleProduct.id=newSingleProduct.id.concat(selectedColor)
        console.log("Single product : ",newSingleProduct)
        let exist=false
        let addedCart=[...state.userCart]

        addedCart.map((curElem:any)=>{
            if(curElem.id==action.payload.id){
                exist=true
            }
        })

        if(exist===false){
            addedCart.push(newSingleProduct)
        }else{
            addedCart=addedCart.map((curElem:any)=>{
                if(curElem.id==newSingleProduct.id){
                    return{
                        ...curElem,
                        amount:curElem.amount+newSingleProduct.amount>curElem.stock?curElem.stock:curElem.amount+newSingleProduct.amount
                    }
                }else{
                    return curElem
                }
            })
        }

        console.log("Added cart : ",addedCart)
        return{
            ...state,
            userCart:addedCart
        }

    case "INCREASE_ITEM":
        const id=action.payload.id
        const productAmount=action.payload.productAmount
      
        const modifiedProducts=state.userCart.map((curElem:any)=>{
            if(curElem.id===id){
                console.log("Match")
                console.log(curElem)
                return{
                    ...curElem,
                    amount:productAmount
                }
            }else{
                return curElem
            }
        })
        console.log("products",modifiedProducts)
        return{
            ...state,
            userCart:modifiedProducts
        }
    

    case "DECREASE_ITEM":
        const id2=action.payload.id
        const productAmount2=action.payload.productAmount
        const modifiedProducts2:any=state.userCart.map((curElem:any)=>{
            if(curElem.id===id2){
                console.log("Match")
                console.log(curElem)
                return{
                    ...curElem,
                    amount:productAmount2
                }
            }else{
                return curElem
            }
        })
        console.log("products",modifiedProducts2)

        return{
            ...state,
            userCart:modifiedProducts2
        }

    case "REMOVE_ITEM":
        const updatedCart=state.userCart.filter((curElem:any)=>{
            if(curElem.id!=action.payload){
                return curElem
            }
        })

        console.log(updatedCart)

        return{
            ...state,
            userCart:updatedCart
        }

    default:
        return state
  }
}

export default CartReducer