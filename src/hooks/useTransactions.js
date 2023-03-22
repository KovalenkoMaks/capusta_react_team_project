import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectMonthsStats,
  selectTransactions,
} from '../redux/transactions/transactionsSelectors';
export const useTransactions = () => {
  const monthsStats = useSelector(selectMonthsStats);
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  return {
    monthsStats,
    transactions,
    categories,
  };
};

// // const { isRefreshing } = useAuth();
