import React, { useEffect } from 'react'
import ProductNavBar from '../components/ProductNavBar'
import { Outlet } from 'react-router-dom'
import { getProduct } from '../api/product'
import { useDispatch, useSelector } from 'react-redux'
import { setListByCategory, setProductList } from '../features/productListSlice'

function ProductPage() {
  const dispatch = useDispatch()
  const test = useSelector((state) => state.products.list)

  const getProductsItems = async () => {
    const productItem = await getProduct()
    dispatch(setProductList(productItem.data))
    dispatch(setListByCategory())
  }

  useEffect(() => {
    getProductsItems()
    // console.log(test)
  }, [])

  useEffect(() => {
    // console.log(test)
  }, [test])

  return (
    <section>
      <ProductNavBar />
      <Outlet />
    </section>
  )
}

export default ProductPage
