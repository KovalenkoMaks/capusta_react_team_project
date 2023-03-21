// import { LogIn } from 'components/logIn/Login';
// import { Registration } from 'components/registrations/Registrations';
// import { Home } from 'pages/Home';
import { PrivateRoute } from 'components/utils/PrivateRoute';
import { RestrictedRoute } from 'components/utils/RestrictedRout';
import Layout from 'pages/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const LogIn = lazy(() => import('components/logIn/Login'));
const Registration = lazy(() =>
  import('components/registrations/Registrations')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<PrivateRoute component={Home} redirectTo={'/login'} />}
        />

        <Route
          path="/login"
          element={<RestrictedRoute component={LogIn} redirectTo={'/'} />}
        />
        <Route path="/registration" element={<Registration />} />
      </Route>
      {/* <Registration /> */}
    </Routes>
    // </Suspense>
  );
};
