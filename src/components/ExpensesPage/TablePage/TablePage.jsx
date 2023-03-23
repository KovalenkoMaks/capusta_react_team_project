import { Table, Space, Button } from 'antd';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer } from '../ExpensesPage.styled';
const { Column } = Table;

const data = [
  {
    description: 'Fuel refill',
    amount: '100',
    date: '2021-04-03',
    category: 'Transport',
    _id: '1',
  },
  {
    description: 'Watching Movie',
    amount: '340',
    date: '2022-08-24',
    category: 'Entertainment',
    _id: '2',
  },
  {
    description: 'Bike for a rent',
    amount: '22',
    date: '2020-12-31',
    category: 'Sports, hobbies',
    _id: '3',
  },
  {
    description: 'Donate on army',
    amount: '666',
    date: '2021-02-28',
    category: 'Other',
    _id: '4',
  },
  {
    description: 'English class',
    amount: '675',
    date: '2022-10-12',
    category: 'Education',
    _id: '5',
  },
  {
    description: 'Buy a computer mouse',
    amount: '36',
    date: '2023-03-19',
    category: 'Technique',
    _id: '6',
  },
  {
    description: 'Buy card game',
    amount: '867',
    date: '2021-11-28',
    category: 'Entertainment',
    _id: '7',
  },
];

export const TablePage = () => {
  return (
    <TableContainer>
      <Table
        dataSource={data}
        // scroll={{
        //   y: 340,
        // }}
        layout="inline"
        pagination={false}
        size={'large'}
      >
        <Column title="Date" dataIndex="date" key="date" width='130px'/>
        <Column title="Descrition" dataIndex="description" key="description" ellipsis='true' width='188px'/>
        <Column title="category" dataIndex="category" key="category" width='116px'/>
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
