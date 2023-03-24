import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import HomePageView from '../../components/HomePageView/HomePageView';
import { Loader } from 'components/Loader/Loader';
import { DivEl } from './Layout.styled';
const Layout = () => {
  return (
    <DivEl>
      <Header />
      <Suspense fallback={<Loader/>}>
        {/* <HomePageView /> */}
        <Outlet />
      </Suspense>
    </DivEl>
  );
};

export default Layout;
