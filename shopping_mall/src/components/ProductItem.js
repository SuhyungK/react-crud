import React from 'react'
import Button from './Button'
import Label from './Label'

function ProductItem({ product }) {
  return (
    <div className="border-2 border-slate-300 rounded-md flex flex-col items-center justify-center pt-4 hover:-translate-y-2">
      <img src={product.image} className='w-52 h-56 mx-auto'/>
      <p className='font-bold truncate w-36 mt-4'> 
        {product.title || "옷 이름 없음"}
      </p>
      <div className='flex items-center mb-4'>
        <Button />
        <Label text={"$" + product.price} />
      </div>
    </div>
  )
}

export default ProductItem