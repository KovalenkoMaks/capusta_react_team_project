import styles from './ReportsBalance.module.css';
import { useSelector } from 'react-redux';

import { getStartBalance } from 'redux/auth/auth-selectors';

//----------------------------------------------------------------------------//
export const ReportsBalance = () => {
  const balanceEl = useSelector(getStartBalance);

  return (
    <>
      <form className={styles.reports_form}>
        <label className={styles.reports_label}>
          Balance:
          <div className={styles.reports_inputWraper}>
            <p className={styles.reports_input}>{balanceEl || '0'}</p>

            <p>UAH</p>
          </div>
        </label>
      </form>
    </>
  );
};
