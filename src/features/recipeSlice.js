import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import recipeService from '../service/recipeService';
import { createCategory } from './category/categorySlice';

export const fetchRecipe = createAsyncThunk(
  "recipes/fetchRecipe",
  async (_, {getState}) => {
    const {recipes} = getState();
    if(recipes.data.length > 0){
      return recipes.data;
    }

    const response = await recipeService.getAllRecipe()
    return response.data
  }
)

// Create new recipe
export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (dataPost) => {
    const response = await recipeService.createRecipe(dataPost);
    return response.data
  }
)

export const updateStatus = createAsyncThunk(
  "recipes/updateStatus",
  async ({id, flag}) => {
    const response = await recipeService.updateStatusRecipe(id, flag);
    return response.data
  }
)

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {data: [], status: 'idle', error: null},
  extraReducers: builder => {
    builder
      // Load data recipe
      .addCase(fetchRecipe.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase((fetchRecipe.rejected), (state, action) => {
        state.status = "failed"
        state.error = action.error.message;

      })

      // Create recipe
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.status = "succeeded"
        // them data moi vao trong data[]
        state.data.push(action.payload)
      })

    // Update status recipe
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.status = "succeeded"
        const index = state.data.findIndex(recipe => recipe.id === action.payload.id);
        if(index !== -1){
          state.data[index] = action.payload
        }
      })

  }
})

export default recipeSlice.reducer;