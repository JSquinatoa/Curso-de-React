import { configureStore } from '@reduxjs/toolkit'
import trainerSlice from './states/trainer.state'

export default configureStore({
  reducer: {
    trainer: trainerSlice,
  }
})