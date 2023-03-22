import {
  UserAvatarContainer,
  LogOutIconBtn,
  LogOutTextBtn,
  UserName,
  UserNameContainer,
} from './UserMenu.styled.jsx';
import { ReactComponent as LogOutIcon } from 'images/exitIcon.svg';
import { useAuth } from 'hooks/useAuth.js';

export default function UserMenu() {
  const { user } = useAuth();
  return (
    <>
      <UserAvatarContainer>{user.email[0]}</UserAvatarContainer>

      <UserNameContainer>
        <UserName>{user.email}</UserName>
      </UserNameContainer>

      <LogOutTextBtn type="button">Exit</LogOutTextBtn>
      <LogOutIconBtn type="button">
        <LogOutIcon />
      </LogOutIconBtn>
    </>
  );
}
