import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/auth/authSelectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};

// const { isRefreshing } = useAuth();
