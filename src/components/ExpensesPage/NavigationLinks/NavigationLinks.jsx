import { Link } from "../ExpensesPage.styled";

export const NavigationLinks = () => {
  return (
    <>
      <Link to="expenses" style={{ marginTop: '8px' }}>Expenses</Link>
      <Link to="income">income</Link>
    </>
  );
};
