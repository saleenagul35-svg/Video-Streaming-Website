import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const searchedSlice = createSlice({
  name: 'searched',
  initialState,
  reducers: {

    searchedValue: (state, action) => {
      state.value = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { searchedValue,removeSearch } = searchedSlice.actions

export default searchedSlice.reducer