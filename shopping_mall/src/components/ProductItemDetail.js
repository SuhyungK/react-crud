import React from 'react'
import DarkButton from './DarkButton'

function ProductItemDetail({ product }) {
  return (
    <div className='flex p-20 gap-12'>
      <img src={product.image} 
        className='w-80'
      />

      <div className='flex flex-col text-left gap-12'>
        <p className='text-2xl font-bold text-gray-400'>{product.category}</p>
        <p className='text-4xl'>{product.title}</p>
        <p className='font-bold text-4xl'>{"$" + product.price}</p>
        <p className='text-gray-400 font-bold'>{product.description}</p>
        <div className='flex place-content-center gap-10'>
          <DarkButton text="장바구니에 담기"/>
          <DarkButton text="장바구니로 이동"/>
        </div>
      </div>
    </div>
  )
}

export default ProductItemDetail