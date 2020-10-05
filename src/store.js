import { configureStore } from '@reduxjs/toolkit'
import videosReducer from './reducers/videos'

export default configureStore({
  reducer: {
    videos: videosReducer
  }
})