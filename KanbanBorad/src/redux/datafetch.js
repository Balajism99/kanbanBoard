import { createSlice } from '@reduxjs/toolkit'
import { columnView } from '../datas/column'

const initialState = {
    datum : columnView
  }
  const data = columnView
  console.log(data)
  export const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
      fetch: (state) => {
       
        state.value = data.name
      },
     
    },
  })
  export const { fetch } = fetchSlice.actions

export default fetchSlice.reducer