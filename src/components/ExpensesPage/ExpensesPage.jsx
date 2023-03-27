import { TablePage } from './TablePage/TablePage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  expenseCategories,
  getMonthStatsExpenses,
} from 'redux/transactions/operations';
// import { useLocation } from 'react-router';
import { useTransactions } from 'hooks/useTransactions';

import { useAuth } from 'hooks/useAuth';

export const ExpensesPage = () => {
  // const location = useLocation();
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  useEffect(() => {
    if (categories.expenses.length > 0) return;
    if (isRefreshing) return;
    dispatch(expenseCategories())
      .unwrap()
      .then(() => {
        // dispatch(getAllUserData());
        dispatch(getMonthStatsExpenses());
      })
      .catch(console.log);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TablePage />
    </>
  );
};
