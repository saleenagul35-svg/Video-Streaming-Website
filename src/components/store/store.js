import { configureStore } from '@reduxjs/toolkit'
import listReducer from '../stateSlice/stateSlice'
import  videoReducer  from '../stateSlice/playVideoSlice'
import  dataBaseReducer from "../stateSlice/DataBaseSlice"
import searchReducer from "../stateSlice/searchSlice"

export const store = configureStore({
  reducer: {
    video : videoReducer,
    list: listReducer,
    dataBase:dataBaseReducer,
    searched :searchReducer,
 
  },
})