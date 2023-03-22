import { useSelector } from 'react-redux';
import {
  selectMonthsStats,
  selectTransactions,
} from '../redux/transactions/transactionsSelectors';
export const useTransactions = () => {
  const monthsStats = useSelector(selectMonthsStats);
  const transactions = useSelector(selectTransactions);

  return {
    monthsStats,
    transactions,
  };
};

// // const { isRefreshing } = useAuth();
