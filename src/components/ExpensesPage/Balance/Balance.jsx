import { Button, Typography, Input, Form } from 'antd';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { newBalance } from 'redux/transactions/operations';
import { ReactComponent as Reports } from '../../../images/bar_chart.svg';
import { BalanceContainer } from '../ExpensesPage.styled';
import { useState } from 'react';

export const Balance = () => {
  const { balance } = useAuth();
  const [value, setValue] = useState('');


  const dispatch = useDispatch();

  const validateNumber = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (!Number.isInteger(Number(value))) {
        reject('Please enter an number');
      } else {
        resolve();
      }
    });
  };

  const handleSubmit = () => {
    dispatch(newBalance(value));
    setValue('');
  };
  return (
    <BalanceContainer>
      <div>
        <Typography level={5} className="title">
          Balance:
        </Typography>
        <Form
          name="number-form"
          initialValues={{ number: value }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="number"
            rules={[
              {
                validator: validateNumber,
              },
            ]}
            noStyle
          >
            <Input
              placeholder={`${balance} UAH`}
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              disabled={balance !==0}
            />
          </Form.Item>

          <Button type="text" disabled={value === '' || balance !==0} className="button" htmlType="submit">
            Confirm
          </Button>
        </Form>
      </div>

      <Button type="text" className="reports">
        Reports <Reports />
      </Button>
    </BalanceContainer>
  );
};
