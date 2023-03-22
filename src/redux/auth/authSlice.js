import { createSlice } from '@reduxjs/toolkit';
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
  },
  reducers: {},
  extraReducers: builder =>
    builder

      // Registration
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        return state;
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
      })
      .addCase(logIn.rejected, (state, action) => {})

      //LogOut
      .addCase(logOut.fulfilled, (state, action) => {
        // state.user = { name: null, email: null };
        // state.token = null;
        state.isLoggedIn = false;
        state.sid = '';
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
      .addCase(getAllUserData.rejected, (state, action) => {}),
});

export default authSlice.reducer;
