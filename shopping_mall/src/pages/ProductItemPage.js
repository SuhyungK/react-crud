import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductItemPage() {
  const productListByCategory = useSelector((state) => state.products.listByCategory)
  const param = useParams()
  // const catergoryName = window.location.pathname.split('/').pop()
  const [ productList, setProductList ] = useState([])
  
  const getObjectByCategory = () =>{
    setProductList(productListByCategory[param.categoryName])
  }

  useEffect(() => {
    getObjectByCategory()
  }, [productListByCategory, param.categoryName])

  return (
    <div className='grid grid-cols-3'>
      {productList && productList.map((product, index) => (
        <div key={index} className='col-span-1'>
          <ProductItem 
            product={product}
          />
        </div> 
      ))}
    </div>
  )
}

export default ProductItemPage