import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/ingredients'; // Thay URL thực tế của bạn vào đây

const IngredientService = {
  getAllIngredients: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      throw error;
    }
  },

  getIngredientById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ingredient with ID ${id}:`, error);
      throw error;
    }
  },

  createIngredient: async (data) => {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      console.error('Error creating ingredient:', error);
      throw error;
    }
  },

  updateIngredient: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating ingredient with ID ${id}:`, error);
      throw error;
    }
  },

  deleteIngredient: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting ingredient with ID ${id}:`, error);
      throw error;
    }
  },
};

export default IngredientService;
