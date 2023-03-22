import {
  UserAvatarContainer,
  LogOutIconBtn,
  LogOutTextBtn,
  UserName,
  UserNameContainer,
} from './UserMenu.styled.jsx';
import { ReactComponent as LogOutIcon } from 'images/exitIcon.svg';
import { useAuth } from 'hooks/useAuth.js';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations.js';

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const ClickHandel = () => {
    dispatch(logOut());
  };
  return (
    <>
      <UserAvatarContainer>{user.email[0]}</UserAvatarContainer>

      <UserNameContainer>
        <UserName>{user.email}</UserName>
      </UserNameContainer>

      <LogOutTextBtn type="button" onClick={ClickHandel}>
        Exit
      </LogOutTextBtn>
      <LogOutIconBtn type="button">
        <LogOutIcon />
      </LogOutIconBtn>
    </>
  );
}
