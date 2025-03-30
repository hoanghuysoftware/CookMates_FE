import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from '../service/userService';

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (_, { getState }) => {
    const { users } = getState();
    if (users.data.length > 0) {
      return users.data;
    }
    const response = await userService.getAllUser();
    return response.data;
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id) => {
    const response = await userService.deleteUserById(id);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState: { data: [], status: 'init', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.data.findIndex(user => user.id === action.payload.id)
        state.data[index] = action.payload
      });


  },
});

export default userSlice.reducer;