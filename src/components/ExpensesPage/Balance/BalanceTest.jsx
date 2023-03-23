import { Button, Typography, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
// import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';

export const Balance = () => {
  const initialValues = { newBalance: 0 };
  const { transactions } = useTransactions();
  const { balance } = useAuth();
  let disabled = transactions.length === 0 && balance === 0;

  const dispatch = useDispatch();
  const onSubmit = value => {
    console.log(value);
    // e.preventDefault();
    // console.log(e.target[0].value);
    // dispatch(newBalance(e.target[0].value));
  };
  return (
    <BalanceContainer>
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
                    placeholder={`${balance} UAH`}
                    // value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  //      <Input
                  //   placeholder={`${balance} UAH`}
                  //   type="text"
                  //   disabled={!disabled}
                  // />
                )}
              </Field>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <Button type="text" className="reports">
        Reports <Reports />
      </Button>
    </BalanceContainer>
  );
};
