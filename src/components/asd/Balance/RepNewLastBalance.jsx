// import BalanceModal from 'components/BalanceModal/BalanceModal';
import styles from './RepNewLastBalance.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newBalance } from 'redux/transactions/transaction-operations';
import { getIsFisrtSignIn, getStartBalance } from 'redux/auth/auth-selectors';
import BalanceModal from '../BalanceModal/BalanceModal';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';

//----------------------------------------------------------------------------//
export const RepNewLastBalance = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFisrtSignIn = useSelector(getIsFisrtSignIn);

  const dispatch = useDispatch();
  const [balance, setBalance] = useState();
  const balanceEl = useSelector(getStartBalance);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'balance':
        setBalance(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(newBalance({ newBalance: balance }));
    setIsModalOpen(false);
  };

  // console.log(typeof balance);

  // console.log(
  //   new Intl.NumberFormat('de-DE', {
  //     style: 'currency',
  //     currency: 'UAH',
  //   }).format(balance)
  // );

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="balance">
          Balance:{' '}
        </label>
        <div className={styles.mobInputWraper}>
          <div className={styles.inputWraper}>
            <input
              className={styles.input}
              id="balance"
              type="number"
              name="balance"
              value={balance || balanceEl || ''}
              min="00.00"
              max="10000000.00"
              step="0.01"
              required
              placeholder="00.00"
              onChange={handleChange}
            />
            <p>UAH</p>
          </div>

          <button
            className={styles.button}
            type="button"
            onClick={handleOpenModal}
            disabled={!balance || balance === '0'}
          >
            CONFIRM
          </button>
        </div>

        {isFisrtSignIn && (
          <BalanceModal onshow={showModal} onclose={handleToggleModal} />
        )}

        {isModalOpen && (
          <ConfirmationModal
            isConfirm={true}
            onSubmit={onSubmit}
            onClose={handleCloseModal}
            title="Are you sure?"
          />
        )}
      </form>
    </>
  );
};
