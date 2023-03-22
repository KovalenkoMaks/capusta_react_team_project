import { createSlice } from '@reduxjs/toolkit';
import { getAllUserData, getMonthStats } from '../auth/operations';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    monthsStats: {},
  },
  reducers: {},
  extraReducers: builder =>
    builder
      //getAllUserData
      .addCase(getAllUserData.pending, (state, action) => {})
      .addCase(getAllUserData.fulfilled, (state, action) => {
        state.transactions = action.payload.transactions;
      })
      .addCase(getAllUserData.rejected, (state, action) => {})
      //getMonthStats
      .addCase(getMonthStats.pending, (state, action) => {})
      .addCase(getMonthStats.fulfilled, (state, action) => {
        console.log(action.payload);
        state.monthsStats = action.payload.monthsStats;
        // console.log(state.monthStats);
      })
      .addCase(getMonthStats.rejected, (state, action) => {}),
});

export default transactionsSlice.reducer;
