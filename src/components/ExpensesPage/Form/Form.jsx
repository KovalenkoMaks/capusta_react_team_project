import { ReactComponent as Calendar } from '../../../images/calendar.svg';
import { ReactComponent as Calculator } from '../../../images/calculator.svg';
import { DatePicker, Input, Button } from 'antd';
import { Field, Form, Formik } from 'formik';
import { FormContainer } from '../ExpensesPage.styled';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useTransactions } from 'hooks/useTransactions';
import { Select } from 'antd';
import format from 'date-fns/format';
import { useDispatch } from 'react-redux';
import { addAnExpense, addAnIncome } from 'redux/transactions/operations';
import { useLocation } from 'react-router-dom';

dayjs.extend(customParseFormat);

const dateFormat = 'DD.MM.YYYY';
const calendarIcon = <Calendar />;
const calculatorIcon = <Calculator />;

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
    resetForm();
    console.log(query);
    if (location.pathname === '/home/expenses') {
      dispatch(addAnExpense(query));
    }
    if (location.pathname === '/home/income') {
      dispatch(addAnIncome(query));
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
            <Form
              onSubmit={handleSubmit}
              style={{ display: 'flex', alignItems: 'center' }}
            >
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
              <div style={{ width: '165px' }}>
                <Field
                  style={{
                    width: 200,
                  }}
                  name="category"
                  as={Select}
                  placeholder="Select a value"
                  onChange={value => setFieldValue('category', value)}
                  // value={values.dropBox}
                  options={items}
                ></Field>
              </div>
              <Field name="amount">
                {({ field }) => (
                  <Input
                    {...field}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    suffix={calculatorIcon}
                    placeholder="0,00"
                    className="calc"
                    style={{ marginRight: '32px' }}
                  />
                )}
              </Field>
              <Button
                type="primary"
                htmlType="submit"
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
              <Button
                style={{ width: '136px', height: '44px' }}
                onClick={() => resetForm()}
              >
                Clear
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </FormContainer>
  );
};
