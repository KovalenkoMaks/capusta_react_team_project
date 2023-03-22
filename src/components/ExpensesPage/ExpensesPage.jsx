import { Balance } from './Balance/Balance';
import { ExpensCont } from './ExpensesPage.styled';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Form } from './Form/Form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categories } from 'redux/transactions/operations';

export const ExpensesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  return (
    <ExpensCont>
      <Balance />
      <NavigationLinks />
      <Form />
    </ExpensCont>
  );
};
