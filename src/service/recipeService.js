import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/recipe'; // URL backend

const RecipeService = {
  // Lấy danh sách tất cả recipe
  getAllRecipe: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  },

  getRecipeById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  },
  // Tạo category mới
  createRecipe: async (RecipeData) => {
    try {
      const response = await axios.post(API_BASE_URL, RecipeData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating Recipe:', error);
      throw error;
    }
  },

  updateStatusRecipe: async (id, status) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/${id}?status=${status}`);
      return response.data;
    } catch (error) {
      console.error('Error update recipe:', error);
      throw error;
    }
  },

  searchRecipe: async (title, page, limit) => {
    if (page === undefined){
      page = 0
    }
    if(limit === undefined){
      limit = 10
    }
      try {
        const response = await axios.get(`${API_BASE_URL}/search?value=${title}&page=${page}&limit=${limit}`);

        return response.data;
      } catch (error) {
        console.error('Error search recipe:', error);
        throw error;
      }
  },
};


export default RecipeService;