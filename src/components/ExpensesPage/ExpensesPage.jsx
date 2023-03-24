import { TablePage } from './TablePage/TablePage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { expenseCategories } from 'redux/transactions/operations';
// import { useLocation } from 'react-router';
import { useTransactions } from 'hooks/useTransactions';
import Summary from 'components/Summary/Summary';

export const ExpensesPage = () => {
  // const location = useLocation();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  useEffect(() => {
    if (categories.expenses.length > 0) return;
    dispatch(expenseCategories());
  }, [categories.expenses.length, dispatch]);

  return (
    <>
      <TablePage />
      <Summary />
    </>
  );
};
