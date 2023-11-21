import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className='flex justify-between'>
      <div>
        logo
      </div>

      <nav>
        <ul className='flex'>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            마이 페이지
          </li>
          <li>
            로그인/로그아웃
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header