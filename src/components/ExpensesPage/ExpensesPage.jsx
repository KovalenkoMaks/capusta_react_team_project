import { Balance } from './Balance/Balance';
import { ExpensCont } from './ExpensesPage.styled';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Form } from './Form/Form';

export const ExpensesPage = () => {
  return (
    <ExpensCont>
      <Balance />
      <NavigationLinks/>
        <Form/>
    </ExpensCont>
  );
};
