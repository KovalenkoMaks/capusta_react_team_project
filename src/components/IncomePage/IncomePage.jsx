import { IncomeTablePage } from './IncomeTablePage/IncomeTablePage';
import { useDispatch } from 'react-redux';
import {
  getMonthStatsIncomes,
  incomesCategories,
} from 'redux/transactions/operations';
// import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useTransactions } from 'hooks/useTransactions';

export const IncomePage = () => {
  //   const location = useLocation();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  useEffect(() => {
    if (categories.incomes.length > 0) return;
    dispatch(incomesCategories())
      .unwrap()
      .then(() => {
        dispatch(getMonthStatsIncomes());
      });
  }, [categories.incomes.length, dispatch]);
  return (
    <>
      <IncomeTablePage />
    </>
  );
};
