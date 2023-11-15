import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import authService from './authServices';

// get the user stored data in local storage from set in the authService
const getUserfromLocalStorage = localStorage.getItem('reviel')
  ? JSON.parse(localStorage.getItem('reviel'))
  : null;
// console.log(getUserfromLocalStorage);
const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isSuccess2: false,
  message: '',
};

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    return await authService.login(userData);
  } catch (error) {
    toast.error('Failed to login, try again');
    return thunkAPI.rejectWithValue(error);
  }
});

export const changePassword = createAsyncThunk('auth/password', async (userData, thunkAPI) => {
  try {
    return await authService.changePassword(userData);
  } catch (error) {
    toast.error('Failed, try again');
    return thunkAPI.rejectWithValue(error);
  }
});

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (userData, thunkAPI) => {
    try {
      return await authService.forgotPassword(userData);
    } catch (error) {
      toast.error('Failed, try again');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const recoverPassword = createAsyncThunk(
  'user/recover-password',
  async (userData, thunkAPI) => {
    try {
      return await authService.recoverPassword(userData);
    } catch (error) {
      toast.error('Failed, try again');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Create an async thunk for logout
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  // Clear the user data from state
  thunkAPI.dispatch(authSlice.actions.clearUser());

  // Clear the user data from localStorage (if needed)
  localStorage.removeItem('reviel');

  // You can also add any other logout-related logic here
  return null; // Return null as there's no specific data needed for logout
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Add a reducer to clear the user data
    clearUser: (state) => {
      state.user = null; // Set the user to null or empty on logout
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = 'success';
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess4 = true;
        state.newCredentials = action.payload;
        state.message = 'success';
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess4 = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess2 = true;
        state.forgotPasswordData = action.payload;
        state.message = 'success';
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess2 = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Recover Password
      .addCase(recoverPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(recoverPassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess3 = true;
        state.recoverPasswordData = action.payload;
        state.message = 'success';
      })
      .addCase(recoverPassword.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess3 = false;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export const { loginUser } = authSlice.actions;
export default authSlice.reducer;
