import { Button, Typography, Input } from 'antd';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';

export const Balance = () => {
  return (
    <BalanceContainer>
      <div>
        <Typography level={5} className="title">
          Balance:
        </Typography>
        <Input placeholder="00.00 UAH" type="text" />
        <Button type="text" className="button">
          Confirm
        </Button>
      </div>

      <Button type='text' className="reports">
        Reports <Reports />
      </Button>
    </BalanceContainer>
  );
};
