import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectMonthsStats,
  selectTransactions,
  selectIncomeSelector,
  selectExpensesSelector,
  selectIncomeData,
  selectExpensesData,
} from '../redux/transactions/transactionsSelectors';
export const useTransactions = () => {
  const monthsStats = useSelector(selectMonthsStats);
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const income = useSelector(selectIncomeSelector);
  const expenses = useSelector(selectExpensesSelector);
  const incomeData = useSelector(selectIncomeData);
  const expensesData = useSelector(selectExpensesData);

  return {
    monthsStats,
    transactions,
    categories,
    income,
    expenses,
    incomeData,
    expensesData,
  };
};

// // const { isRefreshing } = useAuth();
