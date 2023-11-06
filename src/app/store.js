import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import usersSlice from '../features/Users/usersSlice';
import loanSlice from '../features/Loan/loanSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersSlice,
    loan: loanSlice,
  },
});
