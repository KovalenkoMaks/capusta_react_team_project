import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMonthStats } from 'redux/auth/operations';
import { transactionSelectors } from 'redux/transactions';
import s from './Summary.styled.css';

function Summary() {
  const { pathname } = useLocation();
  const transtype = pathname.slice(1);

  const summaryIncomes = useSelector(transactionSelectors.getIncomeMonthStats);
  const summaryExpenses = useSelector(
    transactionSelectors.getExpenseMonthStats
  );

  // eslint-disable-next-line no-unused-vars
  const monthStats =
    useSelector(getMonthStats.getIncomeMonthStats) +
    useSelector(getMonthStats.getExpenseMonthStats);

  const elements =
    transtype === 'expense'
      ? Object.entries(summaryExpenses)
      : Object.entries(summaryIncomes);

  const markup = elements
    .map(([month, sum]) => {
      if (sum === 'N/A') sum = 0;
      return (
        <li key={month} className={s.item}>
          <span className={s.month}>{month}</span>
          <span className={s.sum}>
            {transtype === 'expense' ? '-' : '+'}
            {fnForNumberDivide(sum)}.00
          </span>
        </li>
      );
    })
    .reverse();

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>
        {transtype === 'expense' ? 'Expenses' : 'Income'}
      </h2>
      <ul className={s.list}>{markup}</ul>
    </div>
  );
}

const fnForNumberDivide = number => {
  if (number === undefined) {
    return 0;
  } else {
    const res = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return res;
  }
};

export default Summary;
