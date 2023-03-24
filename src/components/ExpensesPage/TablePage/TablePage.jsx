import { Table, Space, Button } from 'antd';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { delTransaction } from 'redux/transactions/operations';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer } from '../ExpensesPage.styled';
const { Column } = Table;

export const TablePage = () => {
  const dispatch = useDispatch();
  const deleteTransaction = id => {
    console.log(id);
    // const id = e.target.parentNode.parentNode.parentNode.id;
    dispatch(delTransaction(id));
  };
  const { transactions } = useTransactions();
  return (
    <TableContainer>
      <Table
        dataSource={transactions}
        scroll={{
          y: 340,
        }}
        layout="inline"
        pagination={false}
        size={'large'}
        rowKey='_id'
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
