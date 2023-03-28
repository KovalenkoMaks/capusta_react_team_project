import { Button, Typography, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';
import { Link, useLocation } from 'react-router-dom';
import BalanceModal from './BalanceModal';
import { toggleshowBalanceModal } from 'redux/auth/authSlice';

export const Balance = () => {
  const location = useLocation();
  const { transactions } = useTransactions();
  const { balance, isRefreshing } = useAuth();

  const { showBalanceModal } = useAuth();
  let disabled = !(transactions.expenses.length === 0 && balance === 0);
  const dispatch = useDispatch();

  const onSubmit = (value, { resetForm }) => {
    dispatch(newBalance(value));
    resetForm();
  };
  const showReport = !window.location.href.endsWith('reports');
  const toggleWindow = () => {
    dispatch(toggleshowBalanceModal());
  };
  const modalShow =
    (location.pathname === '/home/income' ||
      location.pathname === '/home/expenses') &&
    !isRefreshing &&
    !disabled;

  return (
    <BalanceContainer>
      {showReport ? (
        <Button type="text" className="reports">
          <Link to="/reports">
            Reports <Reports />
          </Link>
        </Button>
      ) : null}
      <Typography level={5} className="title">
        Balance:
      </Typography>
      <div>
        <Formik initialValues={{ newBalance: '' }} onSubmit={onSubmit}>
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="newBalance">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder={`${balance}.00 UAH`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input"
                    readOnly={disabled}
                  />
                )}
              </Field>

              {modalShow && showBalanceModal && (
                <BalanceModal onClose={toggleWindow} />
              )}
              {!disabled ? (
                <Button type="text" htmlType="submit" className="button">
                  Confirm
                </Button>
              ) : (
                <Button
                  type="text"
                  htmlType="submit"
                  disabled
                  className="button"
                >
                  Confirm
                </Button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </BalanceContainer>
  );
};
