import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer, TableWrapper , MobTable, TBodyEl, THeadEl, BodyTrEl } from 'components/ExpensesPage/ExpensesPage.styled';
import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import {
  delTransaction,
  getMonthStatsIncomes,
} from 'redux/transactions/operations';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import Summary from 'components/Summary/Summary';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';
import { useState } from 'react';

export const IncomeTablePage = () => {

  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');
  const { transactions } = useTransactions();
  const isSmallScreen = useIsSmallScreen();
  const dispatch = useDispatch();

  const deleteTransaction = () => {
    setModal(false);
    dispatch(delTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(getMonthStatsIncomes());
      });
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleClick = id => {
    setModal(true);
    setId(id);
  };

  const reversedArr = [...transactions.incomes].reverse();

  return (
    <>
    <TableWrapper>
    {isSmallScreen ? (
      <div style={{marginTop: '60px'}}>
        {reversedArr.length === 0 ? (
          <></>
        ) : (
          reversedArr.map(transaction => (
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
            {reversedArr.length === 0
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
                  ...reversedArr.map(transaction => (
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
                            handleClick(transaction._id);
                          }}
                        >
                          {<DeleteBtn />}
                        </button>
                      </td>
                    </BodyTrEl>
                  )),
                  ...[
                    ...Array(Math.max(0, 21 - reversedArr.length)),
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
    <Summary/>
    </TableWrapper>
    {modal && (
        <ConfirmModal
          onClick={closeModal}
          text="Are you sure?"
          handleConfirm={() => deleteTransaction()}
          handleCancel={() => setModal(prevState => !prevState)}
        />
      )}
  </>
  );
};
