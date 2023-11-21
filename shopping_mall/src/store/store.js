import { configureStore } from '@reduxjs/toolkit'
import productListSlice from '../features/productListSlice'

export default configureStore({
  reducer: {
    products: productListSlice
  },
})
