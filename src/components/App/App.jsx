import '../../../node_modules/modern-normalize/modern-normalize.css';
import { PrivateRoute } from 'components/utils/PrivateRoute';
import { RestrictedRoute } from 'components/utils/RestrictedRout';
import Layout from 'pages/Layout/Layout';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllUserData, getMonthStats, refresh } from 'redux/auth/operations';
import SharedLayout from 'pages/SharedLayout/SharedLayout';

// const Home = lazy(() => import('pages/Home/Home'));
const LogIn = lazy(() => import('components/logIn/Login'));
const Registration = lazy(() =>
  import('components/registrations/Registrations')
);

// це треба буде переробити і теж зробити Suspense i Outlet
// бо тут теж є частинки, які не треба перерендерювати (я про Expenses i Income)
const Expenses = lazy(() => import('pages/Expenses/Expenses'));
const Income = lazy(() => import('pages/Income/Income'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh())
      .unwrap()
      .then(() => {
        dispatch(getAllUserData());
        dispatch(getMonthStats());
      })
      .catch(console.log);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route
          index
          element={<PrivateRoute component={Home} redirectTo={'/login'} />}
        /> */}
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LogIn} redirectTo={'/home/expenses'} />
          }
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<SharedLayout />}>
        <Route
          path="expenses"
          element={<PrivateRoute component={Expenses} redirectTo={'/login'} />}
        />
        {/* <Route path="expenses" element={<Expenses />} /> */}
        <Route path="income" element={<Income />} />
        </Route>
      </Route>
    </Routes>
  );
};
