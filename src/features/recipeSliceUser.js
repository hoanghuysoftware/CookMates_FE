import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import recipeService from '../service/recipeService';

export const fetchDataRecipeForUser = createAsyncThunk(
  "/recipeTest/fetchDataRecipeForUser",
  async (page, {getState}) => {
    const { recipeTest } = getState();
    if (recipeTest.loadingPage.includes(page)) {
      return { data: [], fromCache: true, page };
    }
    const response = await recipeService.getAllRecipeForUser(page);
    return { data: response.data, fromCache: false, page };
  }
)

const TestRecipePage = createSlice({
  name: "recipeTest",
  initialState: {data: {}, loadingPage: [], error: null, status: 'idle'},
  extraReducers: builder => {
    builder
      .addCase(fetchDataRecipeForUser.fulfilled, (state, action) => {
        const { data, page, fromCache } = action.payload;
        state.status = 'succeeded';
        if (!fromCache) {
          state.data[page] = data;         // lưu riêng theo page
          state.loadingPage.push(page);    // đánh dấu đã tải
        }

      })
  }
})

export default TestRecipePage.reducer