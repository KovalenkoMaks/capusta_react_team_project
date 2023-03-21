import {UserAvatarBox, LogOutIconBtn}  from './UserMenu.styled.jsx';
import { ReactComponent as LogOutIcon } from 'images/exitIcon.svg';

export default function UserMenu(){
  return(
    <>
    <UserAvatarBox>U</UserAvatarBox>
    {/* <UserName>Name</UserName>
    <LogOutTextBtn>Exit</LogOutTextBtn> */}
    <LogOutIconBtn>
      <LogOutIcon/>
    </LogOutIconBtn>
    </>

  )

}
