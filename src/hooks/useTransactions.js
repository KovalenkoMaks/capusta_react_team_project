import { useSelector } from 'react-redux';
import { selectMonthsStats } from '../redux/transactions/transactionsSelectors';
export const useTransactions = () => {
  const monthsStats = useSelector(selectMonthsStats);

  return {
    monthsStats,
  };
};

// // const { isRefreshing } = useAuth();
