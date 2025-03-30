import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1/user"; // URL backend

const UserService = {
  getAllUser : async () => {
    try {
      const response  = await axios.get(API_BASE_URL)
      return response.data
    }catch (error){
      console.log("API get all user error", error)
      throw error;
    }
  },
  getUserByID: async (id) => {
    try {
      const response  = await axios.get(`${API_BASE_URL}/${id}`)
      return response.data
    }catch (error){
      console.log("API get user id error", error)
    }
  },
  deleteUserById: async (id) => {
    try {
      const response  = await axios.delete(`${API_BASE_URL}/${id}`)
      return response.data
    }catch (error){
      console.log("API delete user id error", error)
    }
  }
}

export default UserService