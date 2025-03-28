import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ingredientService  from '../../service/IngredientService';

export const fetchIngredient = createAsyncThunk(
  "ingredients/fetchIngredient",
  async (_, {getState}) => {
    const {ingredients} = getState();
    if(ingredients.data.length > 0) {
      return ingredients.data
    }
    const response = await ingredientService.getAllIngredients();
    return response.data
  }
)

export const createIngredient = createAsyncThunk(
  "ingredients/createIngredient",
  async (newIngredient) => {
    const response = await ingredientService.createIngredient(newIngredient)
    return response.data
  }
)

export const updateIngredient = createAsyncThunk(
  "ingredients/updateIngredient",
  async ({ id, name }) => {
    const response = await ingredientService.updateIngredient(id, {name})
    return response.data
  }
)

export const deleteIngredient = createAsyncThunk(
  "categories/deleteIngredient",
  async (id) => {
    await ingredientService.deleteIngredient(id)
    return id;
  }
);

const ingredientSlice = createSlice({
  name: "ingredients",
  initialState: { data: [], status: "idle", error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchIngredient.pending, state => {
        state.status = 'Loading ingredients...'
      })
      .addCase(fetchIngredient.fulfilled, (state, action) => {
        state.status = "Succeeded load ingredients"
        state.data = action.payload
      })
      .addCase(fetchIngredient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Xử lý create Ingredient
      .addCase(createIngredient.fulfilled, (state, action) => {
        state.data.push(action.payload)
      })
      // Xử lý update Ingredient
      .addCase(updateIngredient.fulfilled, (state, action) => {
        const index = state.data.findIndex(ing => ing.id === action.payload.id) // tim vi tri
        state.data[index] = action.payload
      })
      // Xử lý delete Ingredient
      .addCase(deleteIngredient.fulfilled, (state, action) => {
        state.data = state.data.filter((ing) => ing.id !== action.payload);
      });
  }
})

export default ingredientSlice.reducer;