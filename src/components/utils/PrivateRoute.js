import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  // console.log(registration);
  // if (registration) {
  //   console.log('werwer');
  //   return <Navigate to={'/login'} />;
  // }
  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};
