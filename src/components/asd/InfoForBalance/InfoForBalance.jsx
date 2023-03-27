import { useTransactions } from 'hooks/useTransactions';
import Style from './InfiForBalance.module.css';

export const InfoForBalance = () => {
  const { income } = useTransactions();
  const { expenses } = useTransactions();

  return (
    <table className={Style.tablet_cont}>
      <tbody className={Style.Сontainer}>
        <tr className={Style.textSpent}>
          <td className={Style.td_Positoin}>
            <span className={Style.textCategory}>Expenses:</span>

            <span className={Style.text_spentMoney}>- {expenses}.00 UAH.</span>
          </td>
        </tr>
        <tr className={Style.textEarned}>
          <td className={Style.td_Positoin}>
            <span className={Style.textCategory}>Income:</span>

            <span className={Style.text_earnedMoney}>+ {income}.00 UAH.</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
