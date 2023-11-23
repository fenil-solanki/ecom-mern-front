import React from 'react'

const FilterReducer = (state:any,action:any) => {
  switch(action.type){
   
    case "SET_FILTER_PRODUCTS":
        console.log(action.payload)
        return{
            ...state,
            products:[...action.payload],
            filterProducts:[...action.payload]
        }

    case "GET_UNIQUE_COLORS":
        let data=action.payload.map((curElem:any)=>{
            return curElem.color
        })

        let arr:any=[]
        const arr3:any=[]

        const data2=data.map((curElem:any)=>{
            for (let index = 0; index < curElem.length; index++) {
                arr.push(curElem[index])
            }
            return curElem
        })

        
        arr.filter((curColor:any)=>{
            if(arr3.includes(curColor)!=true){
                arr3.push(curColor)
            }
        })



        // return{
        //     ...state,
        //     uniqueColors:arr3
        // }

        return{
            ...state,
            uniqueColors:arr3,
            filters:{
                ...state.filters,
                color:arr3
             },
        }


    case "GET_UNIQUE_TYPES":
        const all_types=action.payload.map((curElem:any)=>{
            return curElem.type
        })


        let unique_types:any=[]

        all_types.filter((curtype:any)=>{
            unique_types.includes(curtype)!==true?unique_types.push(curtype):null
        })


        return{
            ...state,
            unique_types:unique_types,
            filters:{
                ...state.filters,
                type:unique_types
             },
        }


    case "GET_UNIQUE_COMPANIES":
        const all_companies=action.payload.map((curElem:any)=>{
            return curElem.company
        })


        let unique_companies:any=[]

        all_companies.filter((company:any)=>{
            unique_companies.includes(company)!==true && company!==""?unique_companies.push(company):null
        })

        // return{
        //     ...state,
        //     uniqueCompanies:unique_companies
        // }

        return{
            ...state,
            uniqueCompanies:unique_companies,
            filters:{
                ...state.filters,
                company:unique_companies
             },
        }

        

    case "GET_UNIQUE_SIZES":
        let sizeData=action.payload.map((curElem:any)=>{
            return curElem.sizes
        })

        let sizeArray:any=[]
        const unique_sizes:any=[]

        const sizeData2=sizeData.map((curElem:any)=>{
            for (let index = 0; index < curElem.length; index++) {
                sizeArray.push(curElem[index])
            }
            return curElem
        })

        
        sizeArray.filter((curColor:any)=>{
            if(unique_sizes.includes(curColor)!=true){
                unique_sizes.push(curColor)
            }
        })


        // return{
        //     ...state,
        //     uniqueSizes:unique_sizes
        // }

        return{
            ...state,
            uniqueSizes:unique_sizes,
            filters:{
                ...state.filters,
                size:unique_sizes
             },
        }

    case "GET_MIN_MAX_PRICE":
        let min:any=0
        let max:any=0
        
        action.payload.map((curElem:any)=>{
            if(curElem.discount_price!==0){
               if(curElem.discount_price<min){
                min=curElem.discount_price
               }
               if(curElem.discount_price>max){
                max=curElem.discount_price
               }
               
            }else{
                if(curElem.actual_price<min){
                    min=curElem.actual_price
                   }
                   if(curElem.actual_price>max){
                    max=curElem.actual_price
                   }
            }
        })


        return{
            ...state,
            minimum_price:min,
            maximum_price:max,
            filters:{
                ...state.filters,
                price:max
            }
        }

        case "GET_UNIQUE_CATEGORIES":
            const all_categories=action.payload.map((curElem:any)=>{
                return curElem.category
            })
    
    
            let  unique_categories:any=[]
    
            all_categories.filter((category:any)=>{
                unique_categories.includes(category)!==true?unique_categories.push(category):null
            })
    

            return{
                ...state,
                uniqueCategories:unique_categories
            }




    case "UPDTAE_FILTER":
        const name=action.payload.name
        const filterData=action.payload.filterData
        return{
            ...state,
            filters:{
               ...state.filters,
               [name]:filterData
            },
        }

    case "FILTER_PRODUCTS":
        let all_products=[...state.products]
        const {color,type,company,size,price}=state.filters

        if(color){
            if(color.length===0){
                
                all_products=all_products.filter((curElem:any)=>{
                    return curElem
                })

            }else{
                all_products=all_products.filter((curElem:any)=>{
                    console.log(curElem)

                    for (let index = 0; index < color.length; index++) {
                            if(curElem.color.includes(color[index])){
                                console.log(color[index])
                                return curElem
                            }
                        }
                })
            }
            console.log("Final color products : ",all_products)
        }


        if(type){
            if(type.length===0){
                
                all_products=all_products.filter((curElem:any)=>{
                    return curElem
                })
            }else{
                console.log("filter type :",type)
                all_products=all_products.filter((curElem:any)=>{
                    console.log(curElem)

                    for (let index = 0; index < type.length; index++) {
                            if(curElem.type.includes(type[index])){
                                console.log(type[index])
                                return curElem
                            }
                        }
                })
            }

            console.log("Final type products : ",all_products)
           
        }



        if(company){
            if(company.length===0){
                
                all_products=all_products.filter((curElem:any)=>{
                    return curElem
                })
            }else{
                all_products=all_products.filter((curElem:any)=>{
                    console.log(curElem)

                    for (let index = 0; index < company.length; index++) {
                            if(curElem.company.includes(company[index])){
                                console.log(company[index])
                                return curElem
                            }
                            
                        }

                })
            }
        }



        if(size){

            console.log(size)
            if(size.length===0){
                
                all_products=all_products.filter((curElem:any)=>{
                    return curElem
                })
            }else{
                all_products=all_products.filter((curElem:any)=>{
                    console.log(curElem)

                    for (let index = 0; index < size.length; index++) {
                            if(curElem.sizes.includes(size[index])){
                                console.log("Size : ",size[index])
                                return curElem
                            }
                           
                        }
                })
            }
        }



        if(price){
            all_products=all_products.filter((curElem:any)=>{
                if(curElem.discount_price!==0){
                    if(curElem.discount_price<=price){
                        return curElem
                    }
                }else{
                    if(curElem.actual_price<=price){
                        return curElem
                    }
                }
            })
        }

        console.log("All the final products : ",all_products)

        return{
            ...state,
            filterProducts:all_products
        }

        case "ClEAR_FILTER":
            const all_filter_products=[...state.products];
            const allColors=state.uniqueColors
            const allTypes=state.unique_types
            const allCompanies=state.unique_companies
            const allSizes=state.unique_sizes
            return{
                ...state,
                filters:{
                    ...state.filters,
                    color:allColors,
                    type:allTypes,
                    company:allCompanies,
                    size:allSizes
                }
            }

    default:
        return state
  }
}

export default FilterReducer