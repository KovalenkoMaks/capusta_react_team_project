import { Button, Typography, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';
import { Link } from 'react-router-dom';

export const Balance = () => {
  const { transactions } = useTransactions();
  const { balance } = useAuth();

  let disabled = transactions.incomes.length === 0 && balance === 0;

  const dispatch = useDispatch();
  const onSubmit = (value, { resetForm }) => {
    // console.log(value);
    dispatch(newBalance(value));
    resetForm();
  };
  const showReport = !window.location.href.endsWith("reports");

  return (
    <BalanceContainer>
      <Button type="text" className="reports">
        <Link to="/reports">
          Reports <Reports />
        </Link>
      </Button>
      <div>
        <Typography level={5} className="title">
          Balance:
        </Typography>
        <Formik initialValues={{ newBalance: '' }} onSubmit={onSubmit}>
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="newBalance">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder={`${balance}.00 UAH`}
                    // value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    className='input'
                    // disabled={!disabled}
                    readOnly={!disabled}
                  />
                )}
              </Field>
              {disabled ? (
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
