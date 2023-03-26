import { NavStatis } from '../NavStatis/NavStatis';
import { InfoForBalance } from '../InfoForBalance/InfoForBalance';
import { SpendingMoneyStatisticts } from '../SpendingMoneyStatisticts/SpendingMonStat';
import { useEffect, useState } from 'react';
// import styles from './Statisticts.module.css';
import Chart from 'components/chart/Chart';
import { useTransactions } from 'hooks/useTransactions';

export const Statisticts = () => {
  const { expensesData } = useTransactions();
  const { incomeData } = useTransactions();
  const exCate = Object.entries(expensesData);
  const inCate = Object.entries(incomeData?.incomesData ?? incomeData);
  const [itemEl, setItemEl] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [arrow, setArrow] = useState(true);

  useEffect(() => {
    if (!arrow) {
      if (incomeData?.incomesData) {
        setItemEl(Object.entries(incomeData?.incomesData)[0]);
      }

    } else {
      setItemEl(Object.entries(expensesData)[0]);
    }

    setCurrentId(0);
  }, [incomeData, arrow, expensesData]);

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
      <InfoForBalance />
      <SpendingMoneyStatisticts
        handelClickOnCategory={handelClickOnCategory}
        handelArrow={handelArrow}
        arrow={arrow}
        currentId={currentId}
        exCate={exCate}
        inCate={inCate}
      />
      {!!itemEl?.length && <Chart data={itemEl} />}
    </>
  );
};
