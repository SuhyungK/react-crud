import React from 'react'
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='flex justify-between h-16 items-center'>
      <Link to="/">
        <div className='text-2xl font-bold'>
          Shop
        </div>
      </Link>

      <nav className='w-24'>
        <ul className='flex justify-between text-2xl'>
          <Link to="/cart">
            <li><FaShoppingCart /></li>
          </Link>
          <li>
            <FaUser />
          </li>
          <li>
            <FaSignOutAlt />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header