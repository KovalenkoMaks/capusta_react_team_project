import { Button, Typography, Input } from 'antd';
import { useAuth } from 'hooks/useAuth';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';

export const Balance = () => {
  const { transactions } = useTransactions();
  const { balance } = useAuth();
  let disabled = false;

  if (transactions.length === 0 || balance === 0) {
    console.log(disabled);
    disabled = true;
  }

  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    dispatch(newBalance(e.target[0].value));
  };
  return (
    <BalanceContainer>
      <div>
        <Typography level={5} className="title">
          Balance:
        </Typography>
        <form onSubmit={onSubmit}>
          <Input
            placeholder={`${balance} UAH`}
            type="text"
            disabled={disabled}
          />
          {disabled ? null : (
            <Button type="text" className="button" disabled={disabled}>
              Confirm
            </Button>
          )}
        </form>
      </div>

      <Button type="text" className="reports">
        Reports <Reports />
      </Button>
    </BalanceContainer>
  );
};
