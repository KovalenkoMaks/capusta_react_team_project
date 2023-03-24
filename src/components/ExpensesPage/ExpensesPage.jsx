import { TablePage } from './TablePage/TablePage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categories } from 'redux/transactions/operations';
import Header from 'components/Header/Header';

export const ExpensesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

return <TablePage />;
};
