import { IncomeTablePage } from './IncomeTablePage/IncomeTablePage';
import { useDispatch } from 'react-redux';
import {
  getMonthStatsIncomes,
  incomesCategories,
} from 'redux/transactions/operations';
// import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useTransactions } from 'hooks/useTransactions';
import { useAuth } from 'hooks/useAuth';

export const IncomePage = () => {
  //   const location = useLocation();
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  useEffect(() => {
    if (categories.incomes.length > 0) return;
    if (isRefreshing) return;
    dispatch(incomesCategories())
      .unwrap()
      .then(() => {
        dispatch(getMonthStatsIncomes());
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <IncomeTablePage />
    </>
  );
};
