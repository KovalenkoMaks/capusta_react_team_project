import { TablePage } from './TablePage/TablePage';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categories } from 'redux/transactions/operations';
import Header from 'components/Header/Header';
import { Balance } from './Balance/Balance';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Form } from 'react-router-dom';
import { ExpensCont } from './ExpensesPage.styled';

export const ExpensesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  return (
    <ExpensCont>
      <Header />
      <Balance />
      <NavigationLinks />
      <Form />
    </ExpensCont>
  );
};
