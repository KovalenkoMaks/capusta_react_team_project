import styles from './ConfirmationModal.module.css';
import ReactDOM from 'react-dom';

import { useEffect } from 'react';
import CloseSvg from '../CloseSvg/CloseSvg';

export function ConfirmationModal({
  onClose,
  title,
  onSubmit,
  isExit,
  isConfirm,
}) {
  useEffect(() => {
    const handleCloseModal = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseModal);
    return () => window.removeEventListener('keydown', handleCloseModal);
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.backdrop}>
        <div className={styles.background}>
          <p> {title} </p>

          <button
            className={styles.yesBtn}
            type="submit"
            onClick={onSubmit}
            autoFocus={isConfirm && true}
          >
            YES
          </button>

          <button
            className={styles.noBtn}
            type="button"
            onClick={onClose}
            autoFocus={isExit && true}
          >
            NO
          </button>
          <button className={styles.closeBtn} onClick={onClose}>
            <CloseSvg />
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}
