import { Button, Typography, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';
import { Link } from 'react-router-dom';
import { Notification } from 'components/Notification/Notification';
import { useState } from 'react';

export const Balance = () => {
  const { transactions } = useTransactions();
  const { balance } = useAuth();
  const [setPromptClose, setClosePrompt] = useState(true);
  const toggleWindow = () => {
    setClosePrompt(setClosePrompt => !setClosePrompt);
  };

  let disabled = transactions.incomes.length === 0 && balance === 0;

  const dispatch = useDispatch();
  const onSubmit = (value, { resetForm }) => {
    // console.log(value);
    dispatch(newBalance(value));
    resetForm();
  };
  return (
    <BalanceContainer>
      <div>
        <Typography level={5} className="title">
          Balance:
          
        </Typography>
        
        <Formik initialValues={{ newBalance: '' }} onSubmit={onSubmit}>
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <>
            {setPromptClose && <Notification onClose={toggleWindow} />}
            <Form onSubmit={handleSubmit}>
              <Field name="newBalance">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder={`${balance}.00 UAH`}
                    // value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // disabled={!disabled}
                    readOnly={!disabled}
                  />
                )}
              </Field>
              {disabled ? (
                <Button type="text" htmlType="submit" className="button">
                  Confirm
                </Button>
              ) : null}
            </Form>
            </>
          )}
        </Formik>
        
      </div>

      <Button type="text" className="reports">
        <Link to="/reports">
          Reports <Reports />
        </Link>
      </Button>
    </BalanceContainer>
  );
};
