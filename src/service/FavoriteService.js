import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/favorites';

const favoriteService = {
  getFavoriteRecipeByUserId: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${userId}`);
      return response.data;
    } catch (error) {
      console.log('Error when fetch data favorite recipe: ' + error);
      throw error;
    }
  },

  addFavoriteRecipe: async (userId, recipeId) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/${userId}/recipe/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log('Error when add favorite recipe at favoriteService: ' + error);
      throw error;
    }
  },

  removeFavoriteRecipe: async (userId, recipeId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/user/${userId}/recipe/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log('Error when remove favorite recipe at favoriteService: ' + error);
      throw error;
    }
  }

};

export default favoriteService;