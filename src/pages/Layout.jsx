import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HomePageView from './HomePageView/HomePageView';

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <HomePageView />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
