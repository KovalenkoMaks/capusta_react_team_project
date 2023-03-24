import {
  SummaryContainer,
  Header,
  SummaryTable,
  TableTbody,
  MonthTd,
  ValueTd,
  TableTr,
} from './Summary.styled.jsx';
// import { rusToEng } from 'hooks/useMonthTranslate';
import { useTransactions } from 'hooks/useTransactions.js';
import { useLocation } from 'react-router-dom';

export default function Summary() {
  const { monthsStats } = useTransactions();
  const location = useLocation();
  let monthStats = {};
  location.pathname === '/home/expenses'
    ? (monthStats = { ...monthsStats.expenses })
    : (monthStats = { ...monthsStats.incomes });
  return (
    <SummaryContainer>
      <Header>Summary</Header>
      <SummaryTable>
        <TableTbody>
          {Object.entries(monthStats).map(element => {
            if (element[1] === 'N/A') {
              return false;
            } else {
              return (
                <TableTr key={`${element[0]}${element[1]}`}>
                  <MonthTd>{element[0]}</MonthTd>
                  <ValueTd>{element[1]}.00</ValueTd>
                </TableTr>
              );
            }
          })}
        </TableTbody>
      </SummaryTable>
    </SummaryContainer>
  );
}
