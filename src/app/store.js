import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import ingredientReducer from '../features/ingredient/ingredientSlice';
import recipeReducer from '../features/recipeSlice';
import userReducer from '../features/userSlice'
import reviewReducer from '../features/reviewSlice'
import favoriteReducer from '../features/favoriteSlice'
import favoriteRecipesReducer from '../features/favoriteRecipesSlice'

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    ingredients: ingredientReducer,
    recipes: recipeReducer,
    users: userReducer,
    reviews: reviewReducer,
    favorites: favoriteReducer,
    favoriteRecipes: favoriteRecipesReducer
  },
});
