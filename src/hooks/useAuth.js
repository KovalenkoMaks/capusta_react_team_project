import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectAccessToken,
  selectSid,
  selectBalance,
} from '../redux/auth/authSelectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);
  const sid = useSelector(selectSid);
  const balance = useSelector(selectBalance);
  return {
    isLoggedIn,
    user,
    isRefreshing,
    accessToken,
    sid,
    balance,
  };
};

// const { isRefreshing } = useAuth();
