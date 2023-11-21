import React from 'react'
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";

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