import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    productListByCategory: {
      "women's clothing": [],
      "men's clothing": [],
      "electronics": [],
      "jewelery": []
    }
  },
  reducers: {
    setProductList: (state, action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { setProductList } = productListSlice.actions

export default productListSlice.reducer