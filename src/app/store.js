import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import ingredientReducer from '../features/ingredient/ingredientSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    ingredients: ingredientReducer
  },
});
