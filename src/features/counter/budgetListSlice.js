import { createSlice } from "@reduxjs/toolkit";

export const budgetListSlice = createSlice({
  name: 'budgetList',
  initialState: {
    list: [],
    selectedItem: {
      index: -1,
      title: "",
      expense: 0,
    },
    isVisible: false,
    isRemoveAlertVisible: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push({
        ...action.payload,
        index: state.list.length + 1,
      });
    },
    removeItem: (state, action) => {
      state.list = state.list.filter(item => item.index !== action.payload.index)
    },
    editItem: (state, action) => {
      state.list = state.list.map(item => {
        if (item.index === action.payload.index) {
          return action.payload
        } 
        return item
      })
    },
    setSelectedItem: (state, action) => {
      const { index, title, expense } = action.payload || {}
      state.selectedItem = {
        index: index || -1,
        title: title || "",
        expense: expense || 0,
      }
    },
    setAlertVisibility: (state) => {
      state.isVisible = !state.isVisible
    },
    setRemoveAlertVisibility: (state) => {
      state.isRemoveAlertVisible = !state.isRemoveAlertVisible
    }
  }
})

export const { addItem, removeItem, editItem, setSelectedItem, setAlertVisibility, setRemoveAlertVisibility } = budgetListSlice.actions

export default budgetListSlice.reducer