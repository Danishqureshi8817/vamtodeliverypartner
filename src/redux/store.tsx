import { configureStore } from '@reduxjs/toolkit'
import formReducer from "./slice/userSlice"

export const store = configureStore({
  reducer: {
    form:formReducer
  },
})

