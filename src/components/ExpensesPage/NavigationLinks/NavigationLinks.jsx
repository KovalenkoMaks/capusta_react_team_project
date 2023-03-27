import { Link, Navigations } from "../ExpensesPage.styled";

export const NavigationLinks = () => {
  return (
    <Navigations>
      <Link to="expenses">Expenses</Link>
      <Link to="income">income</Link>
    </Navigations>
  );
};
