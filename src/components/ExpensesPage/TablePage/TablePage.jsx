import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import {
  delTransaction,
  getMonthStatsExpenses,
} from 'redux/transactions/operations';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer, TableWrapper } from '../ExpensesPage.styled';
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
  console.log(transactions.expenses);
  const reversedArr = [...transactions.expenses].reverse();
  // data.reverse();
  // console.log(reversedArr);
  return (
    <>
      <TableWrapper>
        <TableContainer>
          <table>
            <thead>
              <tr className="tHead">
                <th className="thDate">Date</th>
                <th>Description</th>
                <th>category</th>
                <th>Sum</th>
                <th className="dell"></th>
              </tr>
            </thead>
            <tbody>
              {reversedArr.length === 0
                ? [...Array(21)].map((_, index) => (
                    <tr key={index}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))
                : [
                    ...reversedArr.map(transaction => (
                      <tr key={transaction._id}>
                        <td className="date">{transaction.date}</td>
                        <td className="decs">{transaction.description}</td>
                        <td className="categ">{transaction.category}</td>
                        <td className="amount" style={{ color: 'red' }}>
                          -{transaction.amount}.00 UAH
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
                      </tr>
                    )),
                    ...[...Array(Math.max(0, 21 - reversedArr.length))].map(
                      (_, index) => (
                        <tr key={`empty-${index}`}>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      )
                    ),
                  ]}
            </tbody>
          </table>
        </TableContainer>
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
