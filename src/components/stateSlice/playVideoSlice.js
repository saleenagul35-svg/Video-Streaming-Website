import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideo: (state,action)=>{
        state.value = action.payload
    },
    unsetVideo:(state)=>{
        state.value = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const {setVideo, unsetVideo} = videoSlice.actions

export default videoSlice.reducer