import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { balance: '', email: '', id: '' },
    isLoggedIn: false,
    isRefreshing: false,
    accessToken: '',
  },
  reducers: {},
  extraReducers: builder =>
    builder
      // Registration
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.user = action.payload.data.userData;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        return state;
      })

      // Log in
      .addCase(logIn.pending, (state, action) => {
        return state;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload.data.userData;
        state.isLoggedIn = true;
        state.accessToken = action.payload.data.accessToken;

        // state.user = action.payload.user;
        // state.token = action.payload.token;
      })
      .addCase(logIn.rejected, (state, action) => {})

      //LogOut
      .addCase(logOut.fulfilled, (state, action) => {
        // state.user = { name: null, email: null };
        // state.token = null;
        state.isLoggedIn = false;
      }),
});

export default authSlice.reducer;
