// import { Button, Typography, Input } from 'antd';
// import { useAuth } from 'hooks/useAuth';
// import { useTransactions } from 'hooks/useTransactions';
// import { useDispatch } from 'react-redux';
// import { newBalance } from 'redux/transactions/operations';
// import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
// import { BalanceContainer } from '../ExpensesPage.styled';

// export const Balance = () => {
//   const { transactions } = useTransactions();
//   const { balance } = useAuth();
//   let disabled = transactions.length === 0 && balance === 0;

//   const dispatch = useDispatch();
//   const onSubmit = e => {
//     e.preventDefault();
//     console.log(e.target[0].value);
//     dispatch(newBalance(e.target[0].value));
//   };
//   return (
//     <BalanceContainer>
//       <div>
//         <Typography level={5} className="title">
//           Balance:
//         </Typography>
//         <form onSubmit={onSubmit}>
// <Input
//   placeholder={`${balance} UAH`}
//   type="text"
//   disabled={!disabled}
// />
// {disabled ? (
//   <Button
//     type="text"
//     className="button"
//     disabled={disabled}
//     // htmlType={onSubmit}
//   >
//     Confirm
//   </Button>
// ) : null}
//         </form>
//       </div>

//       <Button type="text" className="reports">
//         Reports <Reports />
//       </Button>
//     </BalanceContainer>
//   );
// };
//
//
import { Button, Typography, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';

export const Balance = () => {
  const initialValues = { newBalance: 0 };
  const { transactions } = useTransactions();
  const { balance } = useAuth();
  let disabled = transactions.length === 0 && balance === 0;

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
            <Form onSubmit={handleSubmit}>
              <Field name="newBalance">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder={`${balance} UAH`}
                    // value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!disabled}
                  />
                )}
              </Field>
              {disabled ? (
                <Button type="text" htmlType="submit" className="button">
                  Confirm
                </Button>
              ) : null}
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
