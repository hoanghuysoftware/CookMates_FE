import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import ingredientReducer from '../features/ingredient/ingredientSlice';
import recipeReducer from '../features/recipeSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    ingredients: ingredientReducer,
    recipes: recipeReducer,
  },
});
