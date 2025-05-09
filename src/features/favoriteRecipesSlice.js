// favoriteRecipesSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRecipeByListId = createAsyncThunk(
  '/favoriteRecipes/fetchRecipeByListId',
  async (recipeIds, { getState }) => {
    const { recipes } = getState();
    const fetchedRecipes = recipes.data.filter(recipe => recipeIds.includes(recipe.id))
    return fetchedRecipes;
  },
);


const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeByListId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipeByListId.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetchRecipeByListId.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default favoriteRecipesSlice.reducer;