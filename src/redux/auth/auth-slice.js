import { createSlice } from '@reduxjs/toolkit';
import {
  addExpanses,
  addIncome,
} from 'redux/transaction/transaction-operations';
import {
  signIn,
  logIn,
  logOut,
  getCurrentUser,
  googleAuthUser,
  refreshUserInfo,
} from './auth-operations';

import { newBalance } from 'redux/transaction/transaction-operations';
import { deleteTrancaction } from 'redux/transaction/transaction-operations';
////-------------------------------------------------------------------------------------------//
const initialState = {
  userData: {
    email: '',
    balance: 0.0,
    id: '',
    transactions: [],
  },
  refreshToken: '',
  accessToken: '',
  sid: '',
  isLogged: false,
  isFisrtSignIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.isLogged = true;
      state.userData = payload.userData;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isFisrtSignIn = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isLogged = true;
      state.userData = payload.userData;
      state.userData.transactions = payload.userData.transactions;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.isLogged = false;
      state.accessToken = '';
      state.refreshToken = '';
      state.userData.email = '';
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.refreshToken = payload.newRefreshToken;
      state.accessToken = payload.newAccessToken;
      state.sid = payload.newSid;
      state.isLogged = true;
      state.isLoading = false;
    },
    [getCurrentUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getCurrentUser.rejected]: (state, _) => {
      state.refreshToken = '';
      state.accessToken = '';
      state.isLogged = false;
    },
    [newBalance.fulfilled]: (state, { payload }) => {
      state.userData.balance = Number(payload.newBalance);
      state.isFisrtSignIn = false;
    },
    [addExpanses.fulfilled]: (state, { payload }) => {
      state.userData.balance = payload.newBalance;
    },
    [addIncome.fulfilled]: (state, { payload }) => {
      state.userData.balance = payload.newBalance;
    },
    [deleteTrancaction.fulfilled]: (state, { payload }) => {
      state.userData.balance = payload.newBalance;
    },

    [googleAuthUser.fulfilled]: (state, { payload }) => {
      state.refreshToken = payload.refreshToken;
      state.accessToken = payload.accessToken;
      state.sid = payload.sid;
      state.isLogged = true;
      state.userData.email = payload.data.email;
      state.isLoading = false;
    },
    [googleAuthUser.pending]: (state, _) => {
      state.isLoading = true;
    },
    [refreshUserInfo.fulfilled]: (state, { payload }) => {
      state.userData.transactions = payload.transactions;
      state.userData.balance = payload.balance;
    },
  },
});

export default authSlice.reducer;
