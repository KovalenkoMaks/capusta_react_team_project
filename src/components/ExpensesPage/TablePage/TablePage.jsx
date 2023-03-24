import { Table, Space, Button } from 'antd';
import { useTransactions } from 'hooks/useTransactions';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer } from '../ExpensesPage.styled';
const { Column } = Table;

export const TablePage = () => {
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
        rowKey="_id"
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
                <DeleteBtn />
              </Button>
            </Space>
          )}
        />
      </Table>
    </TableContainer>
  );
};
