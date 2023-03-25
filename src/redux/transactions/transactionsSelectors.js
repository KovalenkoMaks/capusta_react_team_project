export const selectMonthsStats = state => state.transactions.monthsStats;
export const selectTransactions = state => state.transactions.transactions;
export const selectCategories = state => state.transactions.categories;
export const selectIncomeSelector = state =>
  state.transactions.dataTransaction.incomes.incomeTotal;
export const selectExpensesSelector = state =>
  state.transactions.dataTransaction.expenses.expenseTotal;
export const selectIncomeData = state =>
  state.transactions.dataTransaction.incomes;
export const selectExpensesData = state =>
  state.transactions.dataTransaction.expenses.expenseData;
