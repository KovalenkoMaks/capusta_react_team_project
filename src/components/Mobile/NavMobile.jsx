import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/arrowGoBack.svg';
import { NavMobileCont } from 'components/ExpensesPage/ExpensesPage.styled';
import { useLocation } from 'react-router-dom';

export const NavMobile = () => {
  const location = useLocation();

  return (
    <NavMobileCont>
      {location.pathname === '/home/expenses' ? (
        <Link to="/expense-transaction">
          <Arrow />
          Create transaction
        </Link>
      ) : (
        <Link to="/income-transaction">
          <Arrow />
          Create transaction
        </Link>
      )}
    </NavMobileCont>
  );
};
