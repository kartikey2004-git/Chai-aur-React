import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './authslice'

const store = configureStore({
  reducer:authSliceReducer
})

export default store
