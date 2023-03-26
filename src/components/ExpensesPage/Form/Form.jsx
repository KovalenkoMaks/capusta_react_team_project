import { ReactComponent as Calendar } from '../../../images/calendar.svg';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import { DatePicker, Input } from 'antd';
import { Field, Form, Formik } from 'formik';
import { FormContainer } from '../ExpensesPage.styled';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useTransactions } from 'hooks/useTransactions';
import { Select } from 'antd';
import format from 'date-fns/format';
import { useDispatch } from 'react-redux';
import {
  addAnExpense,
  addAnIncome,
  getMonthStatsExpenses,
  getMonthStatsIncomes,
} from 'redux/transactions/operations';
import { useLocation } from 'react-router-dom';
import Button from 'components/Button/Button';

dayjs.extend(customParseFormat);

const dateFormat = 'DD.MM.YYYY';
const calendarIcon = <Calendar />;
const calculatorIcon = <Calculator />;
const { Option } = Select;

export const InputForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  // console.log(categories.expenses);
  // console.log(categories.incomes);
  // });
  // location.pathname === '/home/expenses';
  let items = [];
  location.pathname === '/home/expenses'
    ? (items = categories.expenses.map(e => {
        return { value: e, label: e };
      }))
    : (items = categories.incomes.map(e => {
        return { value: e, label: e };
      }));

  const initialValues = {
    description: '',
    amount: '',
    date: '',
    category: '',
  };

  const onSubmit = (value, { resetForm }) => {
    const query = { ...value };
    let date = new Date(value.date.toString());
    date = format(date, 'yyyy-MM-dd');
    query.date = date;
    query.amount = Number(query.amount);
    resetForm();
    if (location.pathname === '/home/expenses') {
      dispatch(addAnExpense(query))
        .unwrap()
        .then(() => {
          dispatch(getMonthStatsExpenses());
        });
    }
    if (location.pathname === '/home/income') {
      dispatch(addAnIncome(query))
        .unwrap()
        .then(() => {
          dispatch(getMonthStatsIncomes());
        });
    }
  };
  return (
    <FormContainer>
      <div style={{ display: 'flex' }}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            resetForm,
          }) => (
            <Form onSubmit={handleSubmit} className="formmm">
              <Field name="date">
                {({ field }) => (
                  <DatePicker
                    {...field}
                    onChange={date =>
                      handleChange({
                        target: {
                          name: 'date',
                          value: date,
                        },
                      })
                    }
                    onBlur={handleBlur}
                    placeholder={dayjs().format(dateFormat)}
                    format={dateFormat}
                    bordered={false}
                    suffixIcon={calendarIcon}
                    size="middle"
                    name="date"
                    label="date"
                    style={{ paddingLeft: '0' }}
                  />
                )}
              </Field>
              <Field name="description">
                {({ field }) => (
                  <Input
                    {...field}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="productdesc"
                    placeholder="Product description"
                  />
                )}
              </Field>

              <Field
                name="category"
                className="category"
                as={Select}
                defaultValue="Select a value"
                onChange={value => setFieldValue('category', value)}
                // value={values.dropBox}
              >
                {items.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
                <Option value="" disabled style={{ display: 'none' }}>
                  Product category
                </Option>
              </Field>

              <Field name="amount">
                {({ field }) => (
                  <Input
                    {...field}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    suffix={calculatorIcon}
                    placeholder="0,00"
                    className="calc"
                  />
                )}
              </Field>
              <div className="btncont">
                <Button
                  type="submit"
                  width="125px"
                  disabled={false}
                  onClick={null}
                  backgroundColor="#FF751D"
                  border="none"
                  textColor="#fff"
                  className="submitBtn"
                  text='Input'
                >
                </Button>
                <Button
                  type='button'
                  width="125px"
                  disabled={false}
                  onClick={() => resetForm()}
                  backgroundColor="transparent"
                  border='2px solid #F6F7FC'
                  textColor='#52555F'
                  text='Clear'
                >
                  Clear
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </FormContainer>
  );
};
