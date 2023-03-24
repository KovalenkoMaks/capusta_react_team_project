import { Table, Space, Button } from 'antd';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import {
  delTransaction,
  getMonthStatsExpenses,
} from 'redux/transactions/operations';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer } from '../ExpensesPage.styled';
const { Column } = Table;

export const TablePage = () => {
  const dispatch = useDispatch();
  const deleteTransaction = id => {
    dispatch(delTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(getMonthStatsExpenses());
      });
  };
  const { transactions } = useTransactions();
  return (
    <TableContainer>
      <Table
        dataSource={transactions.expenses}
        scroll={{
          y: 340,
        }}
        layout="inline"
        pagination={false}
        size={'large'}
      >
        <Column
          title="Date"
          dataIndex="date"
          key="date"
          width="130px"
          render={(_, record) => (
            <Space
              size="middle"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              {/* <p style={{ opacity: '0', visibility: '0' }}>{record._id}</p> */}
              <p>{record.date}</p>
            </Space>
          )}
        />
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
              <Button
                style={{ marginRight: '47px' }}
                onClick={() => {
                  deleteTransaction(record._id);
                }}
                // id={record._id}
              >
                <DeleteBtn />
              </Button>
            </Space>
          )}
        />
      </Table>
    </TableContainer>
  );
};
