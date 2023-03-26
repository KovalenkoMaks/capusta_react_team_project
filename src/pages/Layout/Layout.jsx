import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { ContentContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContentContainer>
    </>

  );
};

export default Layout;
