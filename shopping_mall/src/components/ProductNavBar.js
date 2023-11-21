import React from 'react'
import MenuCategory from './MenuCategory'
import Test2 from '../pages/Test2'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductNavBar() {
  const products = useSelector((state) => state.products.list)

  return (
    <nav className='flex justify-center'>
      <Link to="/">
        <MenuCategory
          category="모두"
        />
      </Link>
      <Link to="/category/jewelery">
        <MenuCategory
          category="쥬얼리"
        />
      </Link>
      <Link to="/category/electronics">
        <MenuCategory
          category="전자기기"
        />
      </Link>
      <Link to="/category/men">
        <MenuCategory
          category="남성의류"
        />
      </Link>
      <Link to="/category/women">
        <MenuCategory
          category="여성의류"
        />
      </Link>
    </nav>
  )
}

export default ProductNavBar