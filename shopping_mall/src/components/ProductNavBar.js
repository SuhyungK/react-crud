import React from 'react'
import MenuCategory from './MenuCategory'
import Test2 from '../pages/Test2'
import { Link } from 'react-router-dom'

function ProductNavBar() {
  return (
    <nav>
      <Link to="test2" element={<Test2 />}>링크 테스트</Link>
      <MenuCategory
        category="모두"
      />
      <MenuCategory
        category="전자기기"
      />
      <MenuCategory
        category="쥬얼리"
      />
      <MenuCategory
        category="남성의류"
      />
      <MenuCategory
        category="여성의류"
      />
    </nav>
  )
}

export default ProductNavBar