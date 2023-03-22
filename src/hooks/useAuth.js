import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectAccessToken,
} from '../redux/auth/authSelectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);
  return {
    isLoggedIn,
    user,
    isRefreshing,
    accessToken,
  };
};

// const { isRefreshing } = useAuth();
