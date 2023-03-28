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
    showBalanceModal: true,
  },
  reducers: {
    toggleshowBalanceModal: state => {
      state.showBalanceModal = false;
    },
  },
  extraReducers: builder =>
    builder
      // Registration
      .addCase(register.fulfilled, (state, action) => {
        state.registration = true;
      })

      // Log in
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.userData;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.registration = false;
      })

      //LogOut
      .addCase(logOut.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { balance: '', email: '', id: '' };
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.sid = '';
        state.accessToken = '';
        state.refreshToken = '';
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      })

      //getAllUserData
      .addCase(getAllUserData.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.balance = action.payload.balance;
      })

      //newBalance
      .addCase(newBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      })

      //addAnExpense
      .addCase(addAnExpense.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      })

      //addAnIncome
      .addCase(addAnIncome.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      })

      //deleteTransaction
      .addCase(delTransaction.fulfilled, (state, action) => {
        state.user.balance = action.payload.newBalance;
      }),
});

export default authSlice.reducer;
export const { toggleshowBalanceModal } = authSlice.actions;
