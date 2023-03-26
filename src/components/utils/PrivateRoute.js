import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useAuth();
  const { isRefreshing } = useAuth();

  // console.log(isLoggedIn, isRefreshing);
  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};
