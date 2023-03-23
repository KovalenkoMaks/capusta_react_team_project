import { Table, Space, Button } from 'antd';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer } from 'components/ExpensesPage/ExpensesPage.styled';
const { Column } = Table;

export const IncomeTablePage = () => {

        return (
          <TableContainer>
            <Table
            //   dataSource={data}
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
        )
      
}