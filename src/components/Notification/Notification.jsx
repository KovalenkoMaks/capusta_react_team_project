import s from './Notification.module.css';

export const Notification = ({ onClose }) => {
  const handleClickWindow = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.commentBubble} onClick={handleClickWindow}>
      Hello! To get started, enter the current amount of your account!{' '}
      <p className={s.bubbleText}>
        You can't spend money until you have it :)
      </p>
      <h6 className={s.prompt}>Click on me to close</h6>
    </div>
  );
};

// export default Notification;
