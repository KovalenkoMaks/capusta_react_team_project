import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import {
  expenseCategories,
  getDataTransaction,
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
    dataTransaction: {
      expenses: { expenseTotal: '', expenseData: {} },
      incomes: [],
    },
  },
  reducers: {},
  extraReducers: builder =>
    builder

      //getMonthStatsExpenses
      .addCase(getMonthStatsExpenses.fulfilled, (state, action) => {
        state.monthsStats.expenses = action.payload.monthsStats;
        state.transactions.expenses = action.payload.expenses;
      })

      //getMonthStatsIncomes
      .addCase(getMonthStatsIncomes.fulfilled, (state, action) => {
        state.transactions.incomes = action.payload.incomes;
        state.monthsStats.incomes = action.payload.monthsStats;
      })

      //getExpenseCategories
      .addCase(expenseCategories.fulfilled, (state, action) => {
        state.categories.expenses = action.payload;
      })

      //getIncomeCategories
      .addCase(incomesCategories.fulfilled, (state, action) => {
        state.categories.incomes = action.payload;
      })

      // getDataTransaction
      .addCase(getDataTransaction.fulfilled, (state, action) => {
        state.dataTransaction.incomes = action.payload.incomes;
        state.dataTransaction.expenses.expenseTotal =
          action.payload.expenses.expenseTotal;
        state.dataTransaction.expenses.expenseData =
          action.payload.expenses.expensesData;
      })

      //LogOut
      .addCase(logOut.fulfilled, state => {
        state.transactions = { expenses: [], incomes: [] };
        state.monthsStats = { expenses: {}, incomes: {} };
        state.categories = { expenses: [], incomes: [] };
        state.dataTransaction = {
          expenses: { expenseTotal: '', expenseData: {} },
          incomes: [],
        };
      }),
});

export default transactionsSlice.reducer;
