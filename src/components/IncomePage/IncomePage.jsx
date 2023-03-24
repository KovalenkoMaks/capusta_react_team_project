import { IncomeTablePage } from './IncomeTablePage/IncomeTablePage';
import { useDispatch } from 'react-redux';
import { incomesCategories } from 'redux/transactions/operations';
// import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useTransactions } from 'hooks/useTransactions';
import Summary from 'components/Summary/Summary';

export const IncomePage = () => {
  //   const location = useLocation();
  const dispatch = useDispatch();
  const { categories } = useTransactions();
  useEffect(() => {
    if (categories.incomes.length > 0) return;
    dispatch(incomesCategories());
  }, [categories.incomes.length, dispatch]);
  return (
    <>
      <IncomeTablePage />
      <Summary />
    </>
  );
};
