import { TablePage } from './TablePage/TablePage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  expenseCategories,
  getMonthStatsExpenses,
  getMonthStatsIncomes,
} from 'redux/transactions/operations';
// import { useLocation } from 'react-router';
import { useTransactions } from 'hooks/useTransactions';
import { getAllUserData } from 'redux/auth/operations';

export const ExpensesPage = () => {
  // const location = useLocation();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  useEffect(() => {
    if (categories.expenses.length > 0) return;
    dispatch(expenseCategories())
      .unwrap()
      .then(() => {
        dispatch(getAllUserData());
        dispatch(getMonthStatsExpenses());
        dispatch(getMonthStatsIncomes());
      })
      .catch(console.log);
  }, [categories.expenses.length, dispatch]);

  return (
    <>
      <TablePage />
    </>
  );
};
