import { ReactComponent as Calendar } from '../../../images/calendar.svg';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import { DatePicker, Input, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FormContainer } from '../ExpensesPage.styled';
import { TablePage } from '../TablePage/TablePage';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useTransactions } from 'hooks/useTransactions';
dayjs.extend(customParseFormat);

const dateFormat = 'DD.MM.YYYY';
const calendarIcon = <Calendar />;
const calcilatorIcon = <Calculator />;

export const Form = () => {
  const { categories } = useTransactions();
  // console.log(categories);
  const items = categories.map((e, index) => {
    return { label: e, key: index };
  });
  // console.log(test);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <FormContainer>
      <div style={{ display: 'flex' }}>
        <DatePicker
          onChange={onChange}
          defaultValue={dayjs()}
          format={dateFormat}
          bordered={false}
          suffixIcon={calendarIcon}
          size="middle"
        />

        <Input className="productdesc" placeholder="Product description" />
        <div style={{ width: '165px' }}>
          <Dropdown menu={{ items }} trigger={['click']}>
            <button onClick={e => e.preventDefault()} className="category">
              Product category
              <DownOutlined />
            </button>
          </Dropdown>
        </div>
        <Input
          suffix={calcilatorIcon}
          placeholder="0,00"
          className="calc"
          style={{ marginRight: '32px' }}
        />

        <Button
          type="primary"
          style={{
            marginRight: '16px',
            width: '136px',
            height: '44px',
            backgroundColor: '#FF751D',
          }}
          className="submitBtn"
        >
          Input
        </Button>
        <Button style={{ width: '136px', height: '44px' }}>Clear</Button>
      </div>
      <TablePage />
    </FormContainer>
  );
};
