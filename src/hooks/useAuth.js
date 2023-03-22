import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectAccessToken,
  selectSid,
} from '../redux/auth/authSelectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);
  const sid = useSelector(selectSid);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    accessToken,
    sid,
  };
};

// const { isRefreshing } = useAuth();
