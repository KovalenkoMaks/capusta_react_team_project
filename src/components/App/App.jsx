import '../../../node_modules/modern-normalize/modern-normalize.css';
import { PrivateRoute } from 'components/utils/PrivateRoute';
import { RestrictedRoute } from 'components/utils/RestrictedRout';
import Layout from 'pages/Layout/Layout';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllUserData, refresh } from 'redux/auth/operations';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { NotFound } from 'components/NotFound/NotFound';
import {
  getMonthStatsExpenses,
  getMonthStatsIncomes,
} from 'redux/transactions/operations';
// import Report from 'pages/Report/Report';

const LogIn = lazy(() => import('components/logIn/Login'));
const Registration = lazy(() =>
  import('components/registrations/Registrations')
);

// це треба буде переробити і теж зробити Suspense i Outlet
// бо тут теж є частинки, які не треба перерендерювати (я про Expenses i Income)
const Expenses = lazy(() => import('pages/Expenses/Expenses'));
const Income = lazy(() => import('pages/Income/Income'));
const Report = lazy(() => import('pages/Report/Report'));
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh())
      .unwrap()
      .then(() => {
        dispatch(getAllUserData());
        dispatch(getMonthStatsExpenses());
        dispatch(getMonthStatsIncomes());
        // dispatch(getDataTransaction());
      })
      .catch(console.log);
  }, [dispatch]);

  return (
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
            element={<PrivateRoute component={Income} redirectTo={'/login'} />}
          />
        </Route>
        <Route
          path="reports"
          element={<PrivateRoute component={Report} redirectTo={'/login'} />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LogIn} redirectTo={'/home/expenses'} />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              component={Registration}
              redirectTo={'/home/expenses'}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
