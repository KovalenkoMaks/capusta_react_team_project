import {UserAvatarContainer, LogOutIconBtn, LogOutTextBtn, UserName, UserNameContainer }  from './UserMenu.styled.jsx';
import { ReactComponent as LogOutIcon } from 'images/exitIcon.svg';

export default function UserMenu(){
  return(
    <>
    <UserAvatarContainer>U</UserAvatarContainer>

    <UserNameContainer><UserName>User Name</UserName></UserNameContainer>

    <LogOutTextBtn type="button">Exit</LogOutTextBtn>
    <LogOutIconBtn type="button">
      <LogOutIcon/>
    </LogOutIconBtn>
    </>

  )

}
