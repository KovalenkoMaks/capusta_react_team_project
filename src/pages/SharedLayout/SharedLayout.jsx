import { Balance } from 'components/ExpensesPage/Balance/Balance';
import { ExpensCont } from 'components/ExpensesPage/ExpensesPage.styled';
import { NavigationLinks } from 'components/ExpensesPage/NavigationLinks/NavigationLinks';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { InputForm } from 'components/ExpensesPage/Form/Form';
import { FormWrapper } from 'components/ExpensesPage/ExpensesPage.styled';
import { TabletDesctopWrapper } from 'components/ExpensesPage/ExpensesPage.styled';
import { NavMobile } from 'components/Mobile/NavMobile';

const SharedLayout = () => {
  return (
    <ExpensCont>
      <NavMobile/>
      <Balance />
      <NavigationLinks />
      <FormWrapper>
        <TabletDesctopWrapper>
          <InputForm />
        </TabletDesctopWrapper>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </FormWrapper>
    </ExpensCont>
  );
};

export default SharedLayout;
