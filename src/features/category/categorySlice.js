import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "../../service/CategoryService";

// Gọi API lấy danh sách categories (chỉ gọi nếu chưa có dữ liệu)
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { getState }) => {
    const { categories } = getState();
    if (categories.data.length > 0) {
      return categories.data; // Không gọi API nếu đã có dữ liệu
    }
    const response = await categoryService.getAllCategories();
    return response.data;
  }
);

// Gọi API thêm category
export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (newCategory) => {
    const response = await categoryService.createCategory(newCategory);
    return response.data;
  }
);

// Gọi API cập nhật category
export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, name }) => {
    const response = await categoryService.updateCategory(id, { name });
    return response.data;
  }
);

// Gọi API xóa category
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    await categoryService.deleteCategory(id);
    return id;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: { data: [], status: "idle", error: null },
  extraReducers: (builder) => {
    builder
      // Xử lý fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Xử lý create category
      .addCase(createCategory.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      // Xử lý update category
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.data.findIndex((cat) => cat.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      // Xử lý delete category
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.data = state.data.filter((cat) => cat.id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
