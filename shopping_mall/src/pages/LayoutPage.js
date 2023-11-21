// import TotalProductPage from './TotalProductPage'
import Header from '../components/Header'
import ProductPage from './ProductPage'
import React, { useEffect } from 'react'
import ProductNavBar from '../components/ProductNavBar'
import { Outlet } from 'react-router-dom'
import { getProduct } from '../api/product'
import { useDispatch, useSelector } from 'react-redux'
import { setListByCategory, setProductList } from '../features/productListSlice'

function Layout() {

  const dispatch = useDispatch()
  const result = useSelector((state) => state.products.listByCategory)

  const getProductsItems = async () => {
    const productItem = await getProduct()
    dispatch(setProductList(productItem.data))
    dispatch(setListByCategory())
  }

  useEffect(() => {
    getProductsItems()
  }, [])

  useEffect(() => {
  }, [result])

  return (
    <div className='w-4/5 m-auto'>
      <Header />
      <Outlet />
      {/* <ProductPage /> */}
    </div>
  )
}

export default Layout