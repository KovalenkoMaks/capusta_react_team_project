import { Link, Navigations } from "../ExpensesPage.styled";

export const NavigationLinks = () => {
  return (
    <Navigations>
      <Link to="expenses" style={{marginTop: '8px'}}>Expenses</Link>
      <Link to="income">income</Link>
    </Navigations>
  );
};
