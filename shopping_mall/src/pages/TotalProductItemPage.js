import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'

function TotalProductItemPage() {
  const totalProdcuts = useSelector((state) => state.products.list)

  return (
    <article className='grid grid-cols-4 gap-4'>
      {totalProdcuts.map((product, index) => (
        <ProductItem 
          key={index}
          product={product} />
      ))}

    </article>
  )
}

export default TotalProductItemPage