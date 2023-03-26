import { Table, Space, Button } from 'antd';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer, TableWrapper } from 'components/ExpensesPage/ExpensesPage.styled';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import {
  delTransaction,
  getMonthStatsIncomes,
} from 'redux/transactions/operations';
import Summary from 'components/Summary/Summary';

const { Column } = Table;

export const IncomeTablePage = () => {
  const { transactions } = useTransactions();
  const dispatch = useDispatch();
  const onClick = id => {
    dispatch(delTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(getMonthStatsIncomes());
      });
  };
  return (
    <TableWrapper>
    <TableContainer>
      <Table
        dataSource={transactions.incomes}
        scroll={{
          y: 340,
        }}
        layout="inline"
        pagination={false}
        size={'large'}
      >
        <Column title="Date" dataIndex="date" key="date" width="130px" />
        <Column
          title="Descrition"
          dataIndex="description"
          key="description"
          ellipsis="true"
          width="188px"
        />
        <Column
          title="category"
          dataIndex="category"
          key="category"
          width="116px"
        />
        <Column
          title="sum"
          dataIndex="amount"
          key="amount"
          render={(_, record) => (
            <Space
              size="middle"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <p>{record.amount}.00 UAH</p>
              <Button style={{ marginRight: '47px' }}>
                <DeleteBtn
                  onClick={() => {
                    onClick(record._id);
                  }}
                />
              </Button>
            </Space>
          )}
        />
      </Table>
    </TableContainer>
    <Summary/>
    </TableWrapper>
  );
};