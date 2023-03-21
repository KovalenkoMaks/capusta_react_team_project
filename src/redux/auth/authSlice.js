import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { balance: '', email: '', id: '' },
    isLoggedIn: false,
    isRefreshing: false,
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
        console.log(action.payload.data.userData);
        state.user = action.payload.data.userData;
        state.isLoggedIn = true;

        // state.user = action.payload.user;
        // state.token = action.payload.token;
      })
      .addCase(logIn.rejected, (state, action) => {}),
});

export default authSlice.reducer;
