import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/Users/UserSlice"

export default configureStore({
  reducer: {
    user:userReducer
  }
})