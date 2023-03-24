import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HomePageView from '../../components/HomePageView/HomePageView';
import { DivEl } from './Layout.styled';
// import Report from 'pages/Report/Report';
// import { Statisticts } from 'components/asd/Statisticts/Statisticts';
import { ReportView } from 'pages/ReportView';

const Layout = () => {
  return (
    <DivEl>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageView />
        <Outlet />
        <ReportView />
      </Suspense>
    </DivEl>
  );
};

export default Layout;

