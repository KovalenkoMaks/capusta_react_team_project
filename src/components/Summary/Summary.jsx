import {SummaryContainer, Header, SummaryTable, TableTbody, MonthTd, ValueTd, TableTr} from './Summary.styled.jsx';
// import { useTransactions } from 'hooks/useTransactions.js';

export default function Summary(){
  const monthStats = {
    January: 50000,
    February: 100,
    March: "N/A",
    April: "N/A",
    May: 1,
    June: "N/A",
    July: 3,
    August: "N/A",
    September: "N/A",
    October: 77,
    November: "N/A",
    December: 123
  }
  // const { monthsStats } = useTransactions();
  // console.log(monthsStats);
  return(
    <SummaryContainer>
     <Header>Summary</Header>
     <SummaryTable>
     <TableTbody>
          { Object.entries(monthStats).map((element) => {
             if(element[1] === 'N/A') {
              return false;
            } else {
              return(
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
  )
}
