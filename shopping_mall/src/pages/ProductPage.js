import React from 'react'
import ProductNavBar from '../components/ProductNavBar'
import { Outlet } from 'react-router-dom'

function ProductPage() {
  return (
    <section>
      <ProductNavBar />
      <Outlet />
    </section>

  )
}

export default ProductPage