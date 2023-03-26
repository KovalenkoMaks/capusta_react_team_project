import { Title, Modal, Text, ClickOnMe } from './BalanceModal.styled';

const BalanceModal = ({ onClose }) => {
  const handleClickWindow = e => {
    if (e.target) {
      onClose();
    }
  };

  return (
    <Modal onClick={handleClickWindow}>
      <Title>
        Hello! To get started, enter the current balance of your account!
      </Title>
      <Text>You can't spend money until you have it :) </Text>
      <ClickOnMe>click on me to close</ClickOnMe>
    </Modal>
  );
};

export default BalanceModal;
