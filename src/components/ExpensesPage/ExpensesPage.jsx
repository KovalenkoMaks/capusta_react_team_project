import { Balance } from './Balance/Balance';
import { ExpensCont } from './ExpensesPage.styled';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Form } from './Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categories } from 'redux/transactions/operations';
import Header from 'components/Header/Header';

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
