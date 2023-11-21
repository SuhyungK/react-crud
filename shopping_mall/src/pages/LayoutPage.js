import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import MenuCategory from '../components/MenuCategory'
import TotalProductPage from './TotalProductPage'
import Header from '../components/Header'
import ProductPage from './ProductPage'

function Layout() {
  const categories = [
    {
      category: "모두",
      page: <TotalProductPage />
    }
  ]

  return (
    <div className='w-4/5 m-auto'>
      <Header />
      <ProductPage />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/test2">test2</Link>
          </li>
        </ul>
      </nav>
      {categories.map((item) => (
        <Link to="/">
          <MenuCategory category={item.category} />
        </Link>
      ))}
      <Outlet /> */}
    </div>
  )
}

export default Layout