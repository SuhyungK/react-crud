import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import budgetListReducer from './features/counter/budgetListSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    budget: budgetListReducer
  },
})
