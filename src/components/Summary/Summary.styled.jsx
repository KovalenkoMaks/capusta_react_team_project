import styled from '@emotion/styled';

export const SummaryContainer = styled.div`
position: relative;
  display: none;
  width: 213px;
  height: 266px;
  overflow: auto;
  border-radius: 20px 20px 20px 0;
  text-transform: uppercase;
  background-color: #f5f6fb;
  &::-webkit-scrollbar {
  width: 6px;
}

 &::-webkit-scrollbar-track {
  background: transparent;
}

&::-webkit-scrollbar-thumb {
  background-color: #FF751D;
  border-radius: 20px;
}


  @media screen and (min-width: 768px) {
    display:block;
    margin-top: 82px;
    margin-left: -40px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    margin-left: 74px;


  }
`;

export const Header = styled.div`
position: sticky;
top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  border-bottom: 2px solid #ffffff;
  background-color: #f5f6fb;
`;
export const SummaryTable = styled.table`
  background-color: #f5f6fb;
  border-collapse: collapse;

  width: 100%;

`;
export const TableTbody = styled.tbody`
  border-left: none;
`;
export const MonthTd = styled.td`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;
export const ValueTd = styled.td`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  /* padding-left: 20px; */
`;
export const TableTr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  border-bottom: 2px solid #ffffff;
  height: 38px;
  text-align: left;
`;
