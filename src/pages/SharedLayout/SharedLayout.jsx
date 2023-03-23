import { Balance } from 'components/ExpensesPage/Balance/Balance';
import { ExpensCont } from 'components/ExpensesPage/ExpensesPage.styled';
import { NavigationLinks } from 'components/ExpensesPage/NavigationLinks/NavigationLinks';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Form } from 'components/ExpensesPage/Form/Form';
import { FormWrapper } from 'components/ExpensesPage/ExpensesPage.styled';

const SharedLayout = () => {
  return (
    <ExpensCont>
      <Balance />
      <NavigationLinks />
      <FormWrapper>
        <Form />
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </FormWrapper>
    </ExpensCont>
  );
};

export default SharedLayout;
