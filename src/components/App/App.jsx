import '../../../node_modules/modern-normalize/modern-normalize.css';
import { PrivateRoute } from 'components/utils/PrivateRoute';
import { RestrictedRoute } from 'components/utils/RestrictedRout';
import Layout from 'pages/Layout/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


const Home = lazy(() => import('pages/Home/Home'));
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
    </Routes>
  );
};
