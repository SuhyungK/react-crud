import React from 'react'
import Button from './Button'
import Label from './Label'

function ProductItem({ product }) {
  return (
    <div className="border-2 border-slate-300 rounded-md flex flex-col items-center justify-center h-96">
      <img src={product.image} className='w-52 h-56 mx-auto'/>
      <p className='font-bold truncate w-36'> 
        {product.title || "옷 이름 없음"}
      </p>
      <div className='flex items-center'>
        <Button />
        <Label text={"$" + product.price} />
      </div>
    </div>
  )
}

export default ProductItem