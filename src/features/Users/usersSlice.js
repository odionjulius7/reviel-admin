import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import usersService from './usersServices';
import { toast } from 'react-toastify';

const initialState = {
  users: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isSuccess1: false,
  message: '',
  person: null,
  userMetrics: {},
  user: {},
};

export const getUsers = createAsyncThunk('users/get-users', async (token, thunkAPI) => {
  try {
    return await usersService.getUsers(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
//
export const searchUserByName = createAsyncThunk('users/search-users', async (nums, thunkAPI) => {
  try {
    return await usersService.searchUserByName(nums);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
//

//
export const getUserMetrics = createAsyncThunk('users/user-metrics', async (token, thunkAPI) => {
  try {
    return await usersService.getUserMetrics(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
// get a user
export const getAUser = createAsyncThunk('user/get-a-user', async (ids, thunkAPI) => {
  try {
    return await usersService.getAUser(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// suspendAUser
export const suspendAUser = createAsyncThunk('user/suspend-a-user', async (ids, thunkAPI) => {
  try {
    return await usersService.suspendAUser(ids);
  } catch (error) {
    toast.error('Failed to suspend user, try again');
    return thunkAPI.rejectWithValue(error);
  }
});
// UnsuspendAUser
export const UnsuspendAUser = createAsyncThunk('user/Unsuspend-a-user', async (ids, thunkAPI) => {
  try {
    return await usersService.UnsuspendAUser(ids);
  } catch (error) {
    toast.error('Failed to unsuspend user, try again');
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction('Reset_all');

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setPageData: (state, action) => {
      state.person = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder // Get Users
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.message = 'success';
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // get a user
      .addCase(getAUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = 'success';
      })
      .addCase(getAUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // search Users By Name
      .addCase(searchUserByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchUserByName.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.message = 'success';
      })
      .addCase(searchUserByName.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      //  User Metrics
      .addCase(getUserMetrics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserMetrics.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.userMetrics = action.payload;
        state.message = 'success';
      })
      .addCase(getUserMetrics.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Sus. User
      .addCase(suspendAUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(suspendAUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess1 = true;
        state.suspendData = action.payload;
        state.message = 'success';
      })
      .addCase(suspendAUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess1 = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Unsus. User
      .addCase(UnsuspendAUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UnsuspendAUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.unsuspendData = action.payload;
        state.message = 'success';
      })
      .addCase(UnsuspendAUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(resetState, () => initialState);
  },
});

export const { setPageData } = usersSlice.actions;
export default usersSlice.reducer;
