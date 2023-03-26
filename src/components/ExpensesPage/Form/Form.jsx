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
import { FieldEl } from './Form.styled';
// import * as Yup from 'yup';
import Button from 'components/Button/Button';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';

dayjs.extend(customParseFormat);

const dateFormat = 'DD.MM.YYYY';
const calendarIcon = <Calendar />;
const calculatorIcon = <Calculator />;

export const InputForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  const isSmallScreen = useIsSmallScreen();
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
    date: dayjs(),
    category: 'Select category',
  };

  const onSubmit = (value, { resetForm }) => {
    const query = { ...value };
    let date = new Date(value.date.toString());
    date = format(date, 'yyyy-MM-dd');
    query.date = date;
    query.amount = Number(query.amount);
    query.amount = Number(query.amount.toFixed(0));
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
  // const validationSchema = Yup.object().shape({
  //   amount: Yup.string()
  //     .required('Required')
  //     .matches(/^\d+(\.\d{1,2})?$/, 'Invalid amount'),
  // });
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
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit} className="formmm">
              {!isSmallScreen && <Field name="date">
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
                    defaultValue={initialValues.date.toDate()}
                    placeholder={initialValues.date.format('YYYY-MM-DD')}
                    onBlur={handleBlur}
                    format={dateFormat}
                    bordered={false}
                    suffixIcon={calendarIcon}
                    size="middle"
                    name="date"
                    label="date"
                    style={{ paddingLeft: '0', width: '100%', maxWidth: '120px' }}
                    
                  />
                )}
              </Field>}
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
                <FieldEl
                  name="category"
                  as={Select}
                  placeholder={initialValues.category}
                  onChange={value => setFieldValue('category', value)}
                  options={items}
                  className='category'
                ></FieldEl>
              </div>
              {isSmallScreen && <Field name="date">
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
                    style={{ paddingLeft: '0', width: '100%', maxWidth: '120px', marginRight: '20px' }}
                    
                  />
                )}
              </Field>}

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
