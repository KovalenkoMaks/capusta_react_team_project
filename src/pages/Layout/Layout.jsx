import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import HomePageView from '../../components/HomePageView/HomePageView';
import { DivEl } from './Layout.styled';
const Layout = () => {
  return (
    <DivEl>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {/* <HomePageView /> */}
        <Outlet />
      </Suspense>
    </DivEl>
  );
};

export default Layout;
