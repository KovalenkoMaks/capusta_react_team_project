import '../../../node_modules/modern-normalize/modern-normalize.css';
import { PrivateRoute, RestrictedRoute } from 'components/utils';
import Layout from 'pages/Layout/Layout';
import LogIn from 'components/logIn/Login';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllUserData, refresh } from 'redux/auth/operations';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { NotFound } from 'components/NotFound/NotFound';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import { ToastContainer } from 'react-toastify';
import { Background } from 'components/Background/Background';

import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'hooks/useAuth';
import {
  expenseCategories,
  getMonthStatsExpenses,
} from 'redux/transactions/operations';

const Expenses = lazy(() => import('pages/Expenses/Expenses'));
const Income = lazy(() => import('pages/Income/Income'));
const Reports = lazy(() => import('pages/Report/Report'));
const Mobile = lazy(() => import('components/Mobile/Mobile'));
export const App = () => {
  const dispatch = useDispatch();
  const isSmallScreen = useIsSmallScreen();
  const { isLoggedIn, isRefreshing } = useAuth();
  useEffect(() => {
    if (!isLoggedIn) return;
    if (isRefreshing) return;
    dispatch(refresh())
      .unwrap()
      .then(() => {
        dispatch(expenseCategories());
        dispatch(getMonthStatsExpenses());
        dispatch(getAllUserData());
      });
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <Background />
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
              path="expense-transaction"
              element={
                <PrivateRoute component={Mobile} redirectTo={'/login'} />
              }
            />
          )}
          {!isSmallScreen && (
            <Route
              path="expense-transaction"
              element={<Navigate to="/home/expenses" />}
            />
          )}
          {isSmallScreen && (
            <Route
              path="income-transaction"
              element={
                <PrivateRoute component={Mobile} redirectTo={'/login'} />
              }
            />
          )}
          {!isSmallScreen && (
            <Route
              path="income-transaction"
              element={<Navigate to="/home/income" />}
            />
          )}
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
