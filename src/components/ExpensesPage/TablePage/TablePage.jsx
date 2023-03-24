import { useTransactions } from 'hooks/useTransactions';
import { useDispatch } from 'react-redux';
import { delTransaction } from 'redux/transactions/operations';
import { ReactComponent as DeleteBtn } from '../../../images/deleteTable.svg';
import { TableContainer } from '../ExpensesPage.styled';

export const TablePage = () => {
  const dispatch = useDispatch();
  const deleteTransaction = id => {
    console.log(id);
    // const id = e.target.parentNode.parentNode.parentNode.id;
    dispatch(delTransaction(id));
  };
  const { transactions } = useTransactions();
  return (
    <TableContainer>
      <table>
        <thead>
          <tr className="tHead">
            <th className='thDate'>Date</th>
            <th>Description</th>
            <th>category</th>
            <th>Sum</th>
            <th className='dell'></th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0
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
                ...transactions.map(transaction => (
                  <tr key={transaction._id}>
                    <td className="date">{transaction.date}</td>
                    <td className="decs">{transaction.description}</td>
                    <td className="categ">{transaction.category}</td>
                    <td className="amount">{transaction.amount}.00 UAH</td>
                    <td className="del">
                      <button type="button" onClick={deleteTransaction(transaction._id)}>{<DeleteBtn />}</button>
                    </td>
                  </tr>
                )),
                ...[...Array(Math.max(0, 21 - transactions.length))].map(
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
  );
};
