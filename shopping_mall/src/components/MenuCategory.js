import React from 'react'

function MenuCategory({ category }) {
  return (
    <div className='border-2 border-slate-400 w-40 px-6 py-4 rounded-md hover:bg-slate-400 hover:text-white font-bold text-slate-700'>
      {category}
    </div>
  )
}

export default MenuCategory