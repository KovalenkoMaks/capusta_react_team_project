import { NavStatis } from '../NavStatis/NavStatis';
import { InfoForBalance } from '../InfoForBalance/InfoForBalance';
import { SpendingMoneyStatisticts } from '../SpendingMoneyStatisticts/SpendingMonStat';
// import { Chart } from '../Chart/Chart';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  incomeDataSelector,
  expensesDataSelector,
} from 'redux/reports/reports-selector';
import styles from './Statisticts.module.css';
import Chart from 'components/chart/Chart';

//-------------------------------------------------------------------//
export const Statisticts = () => {
  let expenses = useSelector(incomeDataSelector);
  let incomes = useSelector(expensesDataSelector);
  // expenses = !!expenses ? expenses : [];
  // incomes = !!incomes ? incomes : [];

  const exCate = Object.entries(expenses);
  const inCate = Object.entries(incomes);

  const [itemEl, setItemEl] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [arrow, setArrow] = useState(true);

  const [chartData, setChartData] = useState([{
    name: 'Pork',
    price: 1000,
    currency: "UAH"
  },
  {
    name: 'Beef',
    price: 1000,
    currency: "UAH"
  },
  {
    name: 'Chiken',
    price: 800,
    currency: "UAH"
  },
  {
    name: 'Fish',
    price: 600,
    currency: "UAH"
  },
  {
    name: 'Panini',
    price: 220,
    currency: "UAH"
  },
  {
    name: 'Cofee',
    price: 350,
    currency: "UAH"
  },
  {
    name: 'Beef',
    price: 1000,
    currency: "UAH"
  },
  {
    name: 'Chiken',
    price: 800,
    currency: "UAH"
  },
  {
    name: 'Fish',
    price: 600,
    currency: "UAH"
  },
  {
    name: 'Panini',
    price: 220,
    currency: "UAH"
  },
  {
    name: 'Cofee',
    price: 350,
    currency: "UAH"
  },
  {
    name: 'Spaghetti',
    price: 230,
    currency: "UAH"
  }]);

  useEffect(() => {
    if (arrow) {
      setItemEl(Object.entries(incomes)[0]);
    } else {
      setItemEl(Object.entries(expenses)[0]);
    }

    setCurrentId(0);
  }, [incomes, arrow, expenses]);

  useEffect(() => {
    if (!itemEl || !itemEl.length) {
      return;
    }

    let data = [];
    Object.entries(itemEl[1]).forEach((elem) => {
      data.push({
        name: elem[0],
        price: elem[1],
        currency: "UAH"
      })
    })
    setChartData(data);
  }, [itemEl]);

  const handelArrow = () => {
    setArrow(ps => !ps);
  };

  const handelClickOnCategory = (item, currentIdItem) => {
    setItemEl(item);
    setCurrentId(currentIdItem);
  };

  return (
    <>
      <NavStatis />
      <div className={styles.statisticsWrapper}>
        <InfoForBalance />
        <SpendingMoneyStatisticts
          handelClickOnCategory={handelClickOnCategory}
          handelArrow={handelArrow}
          arrow={arrow}
          currentId={currentId}
          exCate={exCate}
          inCate={inCate}
        />
        <Chart data={chartData} />
      </div>
    </>
  );
};
