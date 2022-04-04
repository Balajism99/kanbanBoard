import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from './datafetch'

export const store = configureStore({
  reducer: {
    fetch: fetchReducer
  },
})