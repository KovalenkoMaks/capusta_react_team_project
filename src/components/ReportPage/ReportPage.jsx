import { ExpensCont } from './ReportPage.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categories } from 'redux/transactions/operations';
import Header from 'components/Header/Header';
// import { NavStatis } from 'components/asd/NavStatis/NavStatis';
import { ReportView } from 'pages/ReportView';


export const ReportPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  return (
    <ExpensCont>
      <Header />
      <ReportView />
      {/* <NavStatis /> */}

    </ExpensCont>
  );
};
