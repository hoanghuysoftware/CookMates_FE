import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/review';
const ReviewService = {
  getReviewByIdRecipe: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching review:', error);
      throw error;
    }
  },
  createReview: async (data) => {
    try {
      const response = await axios.post(API_BASE_URL, data)
      return response.data
    } catch (error) {
      console.error('Error creating review:', error);
      throw error;
    }
  },
};

export default ReviewService;