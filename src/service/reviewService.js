import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api/v1/review"
const ReviewService = {
  getReviewByIdRecipe : async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching recipe:", error);
      throw error;
    }
  }
}

export default ReviewService