import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import loanService from './loanServices';

//
const initialState = {
  loans: [],
  loanMetrics: {},
  // loan: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const allLoanRecords = createAsyncThunk('loan/get-loans', async (token, thunkAPI) => {
  try {
    return await loanService.allLoanRecords(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getApproveloans = createAsyncThunk(
  'loan/get-approved-loans',
  async (items, thunkAPI) => {
    try {
      return await loanService.getApprovedloans(items);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAloan = createAsyncThunk('loan/get-a-loan', async (ids, thunkAPI) => {
  try {
    return await loanService.getAloan(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getAUserloans = createAsyncThunk('loan/get-user-loans', async (ids, thunkAPI) => {
  try {
    return await loanService.getAUserloans(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteloan = createAsyncThunk('loan/delete-loan', async (ids, thunkAPI) => {
  try {
    return await loanService.deleteloan(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Graph   getMonthlyloan,
export const getMonthlyloanLineChart = createAsyncThunk(
  'users/get-monthly-loans-line-chart',
  async (token, thunkAPI) => {
    try {
      return await loanService.getMonthlyloan(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//

// Graph   getMonthlyloan,
export const getloanMetric = createAsyncThunk('users/get-loan-metrics', async (token, thunkAPI) => {
  try {
    return await loanService.loanMetrics(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
//

// Table   Loan Transaction,
export const loanTransaction = createAsyncThunk(
  'users/get-loan-transaction',
  async (token, thunkAPI) => {
    try {
      return await loanService.loanTransaction(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//

export const resetState = createAction('Reset_all');
//
export const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder // Get loans
      .addCase(allLoanRecords.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allLoanRecords.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.loans = action.payload;
        state.message = 'success';
      })
      .addCase(allLoanRecords.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // get a loan
      .addCase(getAloan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAloan.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.loan = action.payload;
        state.message = 'success';
      })
      .addCase(getAloan.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // loan metrics
      .addCase(getloanMetric.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getloanMetric.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.loanMetrics = action.payload;
        state.message = 'success';
      })
      .addCase(getloanMetric.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Get Loan Line chart
      .addCase(getMonthlyloanLineChart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMonthlyloanLineChart.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.loanLineChartData = action.payload;
        state.message = 'success';
      })
      .addCase(getMonthlyloanLineChart.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      // Get Loan Transaction Table
      .addCase(loanTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loanTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.loanTransactionData = action.payload;
        state.message = 'success';
      })
      .addCase(loanTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(resetState, () => initialState);
  },
});

export const {} = loanSlice.actions;
export default loanSlice.reducer;
