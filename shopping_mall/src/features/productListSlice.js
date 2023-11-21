import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    listByCategory: {},
    selectedProdcut: null
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
    },
    getProductItem: (state, action) => {
      console.log('action.payload', action.payload)
      state.selectedProdcut = state.list.find((product) => Number(action.payload) === Number(product.id))
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProductList, setListByCategory, getProductItem } = productListSlice.actions

export default productListSlice.reducer