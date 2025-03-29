import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/categories"; // URL backend

const CategoryService = {
  // Lấy danh sách tất cả categories
  getAllCategories: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },

  // Lấy thông tin 1 category theo ID
  getCategoryById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching category with ID ${id}:`, error);
      throw error;
    }
  },

  // Tạo category mới
  createCategory: async (categoryData) => {
    try {
      const response = await axios.post(API_BASE_URL, categoryData);
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  },

  // Cập nhật category theo ID
  updateCategory: async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(`Error updating category with ID ${id}:`, error);
      throw error;
    }
  },

  // Xóa category theo ID
  deleteCategory: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      return { message: "Category deleted successfully" };
    } catch (error) {
      console.error(`Error deleting category with ID ${id}:`, error);
      throw error;
    }
  },
};

export default CategoryService;
