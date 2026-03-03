import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[]
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {

    addVideos: (state,action)=>{
      let exists = state.value.find((i)=> i.id === action.payload.id)
      if(!exists){
        state.value.push(action.payload)
      }
      
    },
    removeVideos: (state,action)=>{
      
   state.value =   state.value.filter((a)=>a.id !== action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addVideos,removeVideos } = listSlice.actions

export default listSlice.reducer