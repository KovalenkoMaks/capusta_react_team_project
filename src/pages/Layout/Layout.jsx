import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MainContainer, ContentContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContentContainer>
    </MainContainer>
  );
};

export default Layout;
