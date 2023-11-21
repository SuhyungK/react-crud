import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function ProductItemPage() {
  const productListByCategory = useSelector((state) => state.products.listByCategory)
  const param = useParams()
  const [ productList, setProductList ] = useState([])
  
  const getObjectByCategory = () =>{
    setProductList(productListByCategory[param.categoryName])
  }

  useEffect(() => {
    getObjectByCategory()
  }, [productListByCategory, param.categoryName])

  return (
    <div className='grid grid-cols-4 gap-4'>
      {productList && productList.map((product, index) => (
        <div key={index} className='col-span-1'>
          <Link to={"/item/" + product.id}>
            <ProductItem 
              product={product}
            />
          </Link>
        </div> 
      ))}
    </div>
  )
}

export default ProductItemPage