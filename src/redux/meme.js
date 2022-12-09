import { createSlice } from '@reduxjs/toolkit'

export const memeSlice = createSlice({
  name: 'meme',
  initialState: {
    id: '',
    url: '',
    name: '',
  },
  reducers: {
    setMemeId: (state, action) => {
      state.id = action.payload
    },
    setMemeUrl: (state, action) => {
      state.url = action.payload
    },
    setMemeName: (state, action) => {
        state.name = action.payload
      },
  },
})

export const { setMemeId, setMemeUrl, setMemeName } = memeSlice.actions

export const getMemeId = (state) => state.meme.id
export const getMemeUrl = (state) => state.meme.url
export const getMemeName = (state) => state.meme.name

export default memeSlice.reducer
