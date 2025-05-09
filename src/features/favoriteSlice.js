import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import favoriteService from '../service/FavoriteService';

export const fetchFavoritesByUser = createAsyncThunk(
  'favorites/fetchFavoritesByUser',
  async (userId) => {
    const response = await favoriteService.getFavoriteRecipeByUserId(userId);
    return response.data;
  }
);

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {data: [], status: 'idle', error: null},
  extraReducers: builder => {
    builder
      .addCase(fetchFavoritesByUser.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
      .addCase((fetchFavoritesByUser.rejected), (state, action) => {
        state.status = "failed"
        state.error = action.error.message;
      })
  }
})

export default favoriteSlice.reducer