import '../../../node_modules/modern-normalize/modern-normalize.css';
import { PrivateRoute } from 'components/utils/PrivateRoute';
import { RestrictedRoute } from 'components/utils/RestrictedRout';
import Layout from 'pages/Layout/Layout';
import LogIn from 'components/logIn/Login';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/operations';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { NotFound } from 'components/NotFound/NotFound';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Registration = lazy(() =>
  import('components/registrations/Registrations')
);

// це треба буде переробити і теж зробити Suspense i Outlet
// бо тут теж є частинки, які не треба перерендерювати (я про Expenses i Income)
const Expenses = lazy(() => import('pages/Expenses/Expenses'));
const Income = lazy(() => import('pages/Income/Income'));
const Reports = lazy(() => import('pages/Report/Report'));
const Mobile = lazy(() => import('components/Mobile/Mobile'));
export const App = () => {
  const dispatch = useDispatch();
  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home/expenses" />} />

          <Route path="/home" element={<SharedLayout />}>
            <Route path="" element={<Navigate to="/home/expenses" />} />
            <Route
              path="expenses"
              element={
                <PrivateRoute component={Expenses} redirectTo={'/login'} />
              }
            />
            <Route
              path="income"
              element={
                <PrivateRoute component={Income} redirectTo={'/login'} />
              }
            />
          </Route>
          <Route
            path="reports"
            element={<PrivateRoute component={Reports} redirectTo={'/login'} />}
          />
          {isSmallScreen && (
            <Route
              path="transaction"
              element={
                <PrivateRoute component={Mobile} redirectTo={'/login'} />
              }
            />
          )}
          {/* <Route
            path="/registration"
            element={
              <RestrictedRoute
                component={Registration}
                redirectTo={'/home/expenses'}
              />
            }
          /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LogIn} redirectTo={'/home/expenses'} />
          }
        />
      </Routes>
      <ToastContainer autoClose={1500} />
    </>
  );
};
