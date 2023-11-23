import React from 'react'

const Product = (product:any) => {
    const {id}=product
    return (
    <div>{id}</div>
  )
}

export default Product