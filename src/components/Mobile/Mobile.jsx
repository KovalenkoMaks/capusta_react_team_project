import { InputForm } from 'components/ExpensesPage/Form/Form';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/arrowGoBack.svg';
import { useLocation } from 'react-router-dom';

const Mobile = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/expense-transaction' ? (
        <Link
          to="/"
          style={{ padding: '6px 3px', position: 'absolute', top: '66px' }}
        >
          <Arrow width="18" height="12" />
        </Link>
      ) : (
        <Link
          to="/home/income"
          style={{ padding: '6px 3px', position: 'absolute', top: '66px' }}
        >
          <Arrow width="18" height="12" />
        </Link>
      )}

      <InputForm />
    </>
  );
};

export default Mobile;
