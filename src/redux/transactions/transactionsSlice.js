import { createSlice } from '@reduxjs/toolkit';
import { getAllUserData, getMonthStats } from '../auth/operations';
import { categories } from './operations';
// import { newBalance } from './operations';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    monthsStats: {},
    categories: [],
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
        state.monthsStats = action.payload.monthsStats;

        // console.log(state.monthStats);
      })
      .addCase(getMonthStats.rejected, (state, action) => {})
      //getCategories
      .addCase(categories.pending, (state, action) => {})
      .addCase(categories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(categories.rejected, (state, action) => {}),
});

export default transactionsSlice.reducer;
