import { createSlice } from '@reduxjs/toolkit';
import {
  addAnExpense,
  addAnIncome,
  delTransaction,
  newBalance,
} from 'redux/transactions/operations';
import { logIn, register, logOut, refresh, getAllUserData } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { balance: '', email: '', id: '' },
    isLoggedIn: false,
    isRefreshing: false,
    accessToken: '',
    sid: '',
    refreshToken: '',
    registration: 'false',
  },
  reducers: {},
  extraReducers: builder =>
    builder

      // Registration
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registration = true;
        // return state;
      })
      .addCase(register.rejected, (state, action) => {
        return state;
      })

      // Log in
      .addCase(logIn.pending, (state, action) => {
        return state;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.userData;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.registration = false;
      })
      .addCase(logIn.rejected, (state, action) => {})

      //LogOut
      .addCase(logOut.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { balance: '', email: '', id: '' };
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.sid = '';
        state.accessToken = '';
        state.refreshToken = '';
      })
      .addCase(refresh.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        // state.user = action.payload.userData;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isRefreshing = false;
      })

      //getAllUserData
      .addCase(getAllUserData.pending, (state, action) => {})
      .addCase(getAllUserData.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.balance = action.payload.balance;
      })
      .addCase(getAllUserData.rejected, (state, action) => {})
      //newBalance
      .addCase(newBalance.pending, (state, action) => {})
      .addCase(newBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      })
      .addCase(newBalance.rejected, (state, action) => {})
      //addAnExpense
      .addCase(addAnExpense.pending, (state, action) => {})
      .addCase(addAnExpense.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      })
      .addCase(addAnExpense.rejected, (state, action) => {})
      //addAnIncome
      .addCase(addAnIncome.pending, (state, action) => {})
      .addCase(addAnIncome.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      })
      .addCase(addAnIncome.rejected, (state, action) => {})
      //deleteTransaction
      .addCase(delTransaction.pending, (state, action) => {})
      .addCase(delTransaction.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      })
      .addCase(delTransaction.rejected, (state, action) => {}),
});

export default authSlice.reducer;
