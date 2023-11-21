import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    listByCategory: {}
  },
  reducers: {
    setProductList: (state, action) => {
      state.list = action.payload
    },
    setListByCategory: (state) => {
      state.listByCategory = {}
      state.list.forEach((product) => {
        const category = product.category.split('\'')[0];
    
        if (state.listByCategory.hasOwnProperty(category)) {
          state.listByCategory[category].push(product);
        } else {
          state.listByCategory[category] = [product];
        }
      });
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProductList, setListByCategory } = productListSlice.actions

export default productListSlice.reducer