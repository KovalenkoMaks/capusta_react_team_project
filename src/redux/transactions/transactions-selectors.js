export const getExpenceList = state => state.transactions.expenses.expenses;
export const getIncomeList = state => state.transactions.income.income;
export const getIncomeMonth = state => state.transactions.income.monthsStats;
export const getExpenseMonth = state => state.transactions.expenses.monthsStats;
// export const getNewBalance = state => state.newBalance;
export const getLoading = state => state.transactions.loading;
