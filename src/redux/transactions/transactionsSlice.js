import { createSlice } from '@reduxjs/toolkit';
import { getAllUserData } from '../auth/operations';
import {
  addAnExpense,
  addAnIncome,
  expenseCategories,
  getMonthStatsExpenses,
  getMonthStatsIncomes,
  incomesCategories,
} from './operations';
// import { newBalance } from './operations';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: { expenses: [], incomes: [] },
    monthsStats: { expenses: {}, incomes: {} },
    categories: { expenses: [], incomes: [] },
  },
  reducers: {},
  extraReducers: builder =>
    builder

      //getAllUserData
      .addCase(getAllUserData.pending, (state, action) => {})
      .addCase(getAllUserData.fulfilled, (state, action) => {
        // state.transactions = action.payload.transactions;
      })
      .addCase(getAllUserData.rejected, (state, action) => {})

      //getMonthStatsExpenses
      .addCase(getMonthStatsExpenses.pending, (state, action) => {})
      .addCase(getMonthStatsExpenses.fulfilled, (state, action) => {
        state.monthsStats.expenses = action.payload.monthsStats;
        state.transactions.expenses = action.payload.expenses;
      })
      .addCase(getMonthStatsExpenses.rejected, (state, action) => {})

      //getMonthStatsIncomes
      .addCase(getMonthStatsIncomes.pending, (state, action) => {})
      .addCase(getMonthStatsIncomes.fulfilled, (state, action) => {
        state.transactions.incomes = action.payload.incomes;
        state.monthsStats.incomes = action.payload.monthsStats;
      })
      .addCase(getMonthStatsIncomes.rejected, (state, action) => {})

      //getExpenseCategories
      .addCase(expenseCategories.pending, (state, action) => {})
      .addCase(expenseCategories.fulfilled, (state, action) => {
        state.categories.expenses = action.payload;
      })
      .addCase(expenseCategories.rejected, (state, action) => {})

      //getIncomeCategories
      .addCase(incomesCategories.pending, (state, action) => {})
      .addCase(incomesCategories.fulfilled, (state, action) => {
        state.categories.incomes = action.payload;
      })
      .addCase(incomesCategories.rejected, (state, action) => {})

      //addAnExpense
      .addCase(addAnExpense.pending, (state, action) => {})
      .addCase(addAnExpense.fulfilled, (state, action) => {
        // state.categories = action.payload;
      })
      .addCase(addAnExpense.rejected, (state, action) => {})

      //addAnIncome
      .addCase(addAnIncome.pending, (state, action) => {})
      .addCase(addAnIncome.fulfilled, (state, action) => {
        // state.categories = action.payload;
      })
      .addCase(addAnIncome.rejected, (state, action) => {}),
});
// newBalance: 4877;
// transaction:
//   amount: 123;
//   category: 'Продукты';
//   date: '2023-03-01';
//   description: 'qweqweqwe';
//   _id: '641c76da84b2992174d319c6';
export default transactionsSlice.reducer;
