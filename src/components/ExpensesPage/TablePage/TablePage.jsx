import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import {
  delTransaction,
  getMonthStatsExpenses,
} from 'redux/transactions/operations';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import {
  TableContainer,
  TableWrapper,
  MobTable,
  TBodyEl,
  THeadEl,
  BodyTrEl,
} from '../ExpensesPage.styled';
import dayjs from 'dayjs';

import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import Summary from 'components/Summary/Summary';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';
import { useState } from 'react';

export const TablePage = () => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');

  const closeModal = () => {
    setModal(false);
  };

  const handleClick = id => {
    setModal(true);
    setId(id);
  };
  const dispatch = useDispatch();

  const deleteTransaction = () => {
    setModal(false);
    dispatch(delTransaction(id))
      .unwrap()
      .then(() => {
        dispatch(getMonthStatsExpenses());
      });
  };
  const { transactions } = useTransactions();
  console.log(transactions);
  const isSmallScreen = useIsSmallScreen();
  const sortArr = [...transactions.expenses].reverse();

  return (
    <>
      <TableWrapper>
        {isSmallScreen ? (
          <div style={{ marginTop: '125px' }}>
            {sortArr.length === 0 ? (
              <></>
            ) : (
              sortArr
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(transaction => (
                  <MobTable key={transaction._id}>
                    <div className="mobCont">
                      <p className="mobDesc">{transaction.description}</p>
                      <div>
                        <p className="mobDate">
                          {dayjs(transaction.date).format('DD.MM.YYYY')}
                        </p>
                        <p className="mobCateg">{transaction.category}</p>
                      </div>
                    </div>
                    <p className="mobAmount">- {transaction.amount}.00 UAH.</p>
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
                  <th className="thDesc">Description</th>
                  <th className="thCat">category</th>
                  <th className="thSum">Sum</th>
                  <th className="dell"></th>
                </tr>
              </THeadEl>
              <TBodyEl>
                {sortArr.length === 0
                  ? [...Array(21)].map((_, index) => (
                      <tr key={index} style={{ display: 'flex' }}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))
                  : [
                      ...sortArr
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map(transaction => (
                          <BodyTrEl key={transaction._id}>
                            <td className="date">
                              {dayjs(transaction.date).format('DD.MM.YYYY')}
                            </td>
                            <td className="decs">{transaction.description}</td>
                            <td className="categ">{transaction.category}</td>
                            <td className="amount">
                              - {transaction.amount}.00 UAH.
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
                      ...[...Array(Math.max(0, 21 - sortArr.length))].map(
                        (_, index) => (
                          <tr
                            key={`empty-${index}`}
                            style={{ display: 'flex' }}
                          >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        )
                      ),
                    ]}
              </TBodyEl>
            </table>
          </TableContainer>
        )}
        <Summary />
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
