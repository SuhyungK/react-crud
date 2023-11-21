import React, { useEffect } from 'react'
import ProductNavBar from '../components/ProductNavBar'
import { Outlet } from 'react-router-dom'
import { getProduct } from '../api/product'
import { useDispatch } from 'react-redux'
import { setListByCategory, setProductList } from '../features/productListSlice'

function ProductPage() {
  const dispatch = useDispatch()

  const getProductsItems = async () => {
    const productItem = await getProduct()
    dispatch(setProductList(productItem.data))
    dispatch(setListByCategory())
  }

  useEffect(() => {
    getProductsItems()
    // console.log(test)
  }, [])

  return (
    <section>
      <ProductNavBar />
      <Outlet />
    </section>
  )
}

export default ProductPage
