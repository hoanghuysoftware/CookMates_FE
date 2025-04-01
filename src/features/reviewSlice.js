import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reviewService from '../service/reviewService';

export const fetchDataReviewByRecipeId = createAsyncThunk(
  "reviews/fetchDataReviewByRecipeId",
  async (id, {getState}) => {
    const {reviews} = getState()
    if(reviews.length >0){
      return reviews.data
    }
    const response = await reviewService.getReviewByIdRecipe(id)
    return response.data
  }
)

const ReviewSlice = createSlice({
  name: "reviews",
  initialState: {data: [], status: "idle", error: null},
  extraReducers: builder => {
    builder
      .addCase(fetchDataReviewByRecipeId.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchDataReviewByRecipeId.fulfilled, (state, action) =>{
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchDataReviewByRecipeId.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message;
      })
  }
})

export default ReviewSlice.reducer