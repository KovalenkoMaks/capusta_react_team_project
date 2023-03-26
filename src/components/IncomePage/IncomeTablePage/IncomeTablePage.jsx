import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer, MobTable, TBodyEl, THeadEl, BodyTrEl } from 'components/ExpensesPage/ExpensesPage.styled';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import {
  delTransaction,
  getMonthStatsIncomes,
} from 'redux/transactions/operations';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';

export const IncomeTablePage = () => {
  const { transactions } = useTransactions();
  const isSmallScreen = useIsSmallScreen();
  const dispatch = useDispatch();
  const deleteTransaction = id => {
    dispatch(delTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(getMonthStatsIncomes());
      });
  };
  return (
    <>
    {isSmallScreen ? (
      <div style={{marginTop: '60px'}}>
        {transactions.expenses.length === 0 ? (
          <></>
        ) : (
          transactions.incomes.map(transaction => (
            <MobTable key={transaction._id}>
              <div className="mobCont">
                <p className="mobDesc">{transaction.description}</p>
                <div>
                  <p className="mobDate">{transaction.date}</p>
                  <p className="mobCateg">{transaction.category}</p>
                </div>
              </div>
              <p className="incomeMobAmount">{transaction.amount}.00 UAH.</p>
              <button
                type="button"
                onClick={() => {
                  deleteTransaction(transaction._id);
                }}
                className="mobDel"
              >
                {<DeleteBtn />}
              </button>
            </MobTable>
          ))
        )}
      </div>
    ) : (
      <TableContainer>
        <table>
          <THeadEl>
            <tr className="tHead">
              <th className="thDate">Date</th>
              <th className='thDesc'>Description</th>
              <th className='thCat'>category</th>
              <th className='thSum'>Sum</th>
              <th className="dell"></th>
            </tr>
          </THeadEl>
          <TBodyEl>
            {transactions.expenses.length === 0
              ? [...Array(21)].map((_, index) => (
                  <tr key={index} style={{display: 'flex'}}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))
              : [
                  ...transactions.incomes.map(transaction => (
                    <BodyTrEl key={transaction._id}>
                      <td className="date">{transaction.date}</td>
                      <td className="decs">{transaction.description}</td>
                      <td className="categ">{transaction.category}</td>
                      <td className="incomeAmount">
                        {transaction.amount}.00 UAH.
                      </td>
                      <td className="del">
                        <button
                          type="button"
                          onClick={() => {
                            deleteTransaction(transaction._id);
                          }}
                        >
                          {<DeleteBtn />}
                        </button>
                      </td>
                    </BodyTrEl>
                  )),
                  ...[
                    ...Array(Math.max(0, 21 - transactions.incomes.length)),
                  ].map((_, index) => (
                    <tr key={`empty-${index}`} style={{display: 'flex'}}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  )),
                ]}
          </TBodyEl>
        </table>
      </TableContainer>
    )}
  </>
  );
};
