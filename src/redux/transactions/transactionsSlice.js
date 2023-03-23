import { createSlice } from '@reduxjs/toolkit';
import { getAllUserData, getMonthStats } from '../auth/operations';
import { addAnExpense, categories } from './operations';
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
      .addCase(categories.rejected, (state, action) => {})
      //addAnExpense
      .addCase(addAnExpense.pending, (state, action) => {})
      .addCase(addAnExpense.fulfilled, (state, action) => {
        // state.categories = action.payload;
      })
      .addCase(addAnExpense.rejected, (state, action) => {}),
});
// newBalance: 4877;
// transaction:
//   amount: 123;
//   category: 'Продукты';
//   date: '2023-03-01';
//   description: 'qweqweqwe';
//   _id: '641c76da84b2992174d319c6';
export default transactionsSlice.reducer;
