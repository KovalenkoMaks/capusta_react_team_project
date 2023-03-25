import styles from './BalanceModal.module.css';
export default function BalanceModal() {
  return (
    <div className={styles.background}>
      <p> Hello! To get started, enter the current balance of your account! </p>
      <p>You can't spend money until you have it </p>
    </div>
  );
}
