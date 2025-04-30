import { createSlice } from '@reduxjs/toolkit'

export const trainerSlice = createSlice({
  name: 'trainer',
  initialState: '',
  reducers: {
    
    setTrainerG:(state, action) => action.payload
  },
})

// Action creators are generated for each case reducer function
export const { setTrainerG } = trainerSlice.actions

export default trainerSlice.reducer