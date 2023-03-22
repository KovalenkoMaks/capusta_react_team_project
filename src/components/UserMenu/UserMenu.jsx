import {
  UserAvatarContainer,
  LogOutIconBtn,
  LogOutTextBtn,
  UserName,
  UserNameContainer,
} from './UserMenu.styled.jsx';
import { ReactComponent as LogOutIcon } from 'images/exitIcon.svg';
import { useAuth } from 'hooks/useAuth.js';
import { useState, useEffect } from 'react';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal.jsx';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations.js';

export default function UserMenu() {
  const { user } = useAuth();
  const [modal, setModal] = useState(false);

    useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    setModal(false);
  };
  const dispatch = useDispatch();
  // const ClickHandel = () => {
  //   dispatch(logOut());
  // };
  const handleClick = () => {
    setModal(true);
  };
  return (
    <>
      <UserAvatarContainer>{user.email[0]}</UserAvatarContainer>

      <UserNameContainer>
        <UserName>{user.email}</UserName>
      </UserNameContainer>

      <LogOutTextBtn type="button" onClick={handleClick}>
        Exit
      </LogOutTextBtn>
      <LogOutIconBtn type="button" onClick={handleClick}>
        <LogOutIcon />
      </LogOutIconBtn>
      {modal && (
      <ConfirmModal
        onClick={closeModal}
        text="Do you really want to leave?"
        handleConfirm={() => dispatch(logOut())}
        handleCancel={() => setModal(prevState => !prevState)}
      />
    )}
      </>
  );
}
