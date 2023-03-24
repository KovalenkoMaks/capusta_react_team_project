import { NavLink } from 'react-router-dom';
const { default: styled } = require('@emotion/styled');

export const BalanceContainer = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;

    .title {
      margin-right: 20px;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.02em;
      color: rgba(82, 85, 95, 0.7);
    }

    Input {
      width: 125px;
      border: 2px solid #ffffff;
      border-radius: 16px;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      margin-right: 16px;
      padding: 12px 20px 12px 12px;
      background-color: transparent;
    }

    Input::placeholder {
      text-align: right;
      font-weight: 700;
      color: black;
    }

    .button {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      border: 2px solid #ffffff;
      border-radius: 16px;
      color: rgba(82, 85, 95, 0.7);
      width: 125px;
      height: 44px;
    }
  }

  .reports {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    position: absolute;
    right: 0;
    top: 47px;
  }

  .reports a {
    color: rgba(82, 85, 95, 0.7);
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;

export const ExpensCont = styled.div`
  position: relative;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    max-width: 1098px;
  }
`;

export const Navigations = styled.div`
  position: absolute;
  bottom: 0;
`;

export const Link = styled(NavLink)`
  width: 138px;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  background-color: #fafbfd;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: #fefefe;
    color: #ff751d;
  }
`;

export const FormWrapper = styled.div`
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 0px 30px 30px 30px;
  height: 579px;
  background-color: #fff;
  padding: 32px;

  @media screen and (min-width: 1280px) {
    max-width: 1098px;
  }
`;

export const FormContainer = styled.div`
  .inputs {
    display: flex;
    align-items: center;
  }

  .productdesc {
    width: 290px;
  }

  .calc {
    width: 119px;
    gap: 10px;
    justify-content: flex-end;
  }

  .category {
    width: 165px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 2px solid #f5f6fb;
    color: #c7ccdc;
  }

  .submitBtn {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #ffffff;
  }
`;

export const TableContainer = styled.div`
  margin-top: 60px;
  overflow-x: hidden;

  table {
    border-collapse: collapse; /* optional */
  }

  thead,
  tbody {
    border: 0;
    padding: 0;
  }

  .tHead {
    background-color: #f5f6fb;
    border-radius: 20px 20px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tHead .dell {
    width: 20px;
  }

  .tHead th {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  tr {
    display: flex;
    height: 40px;
    border: 2px solid #f5f6fb;
    width: 746px;
    background-color: #fff;
    padding: 11px 46px 11px 20px;
    justify-content: space-between;
    align-items: center;
  }

  tbody {
    display: block;
    height: 360px;
    width: 746px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
    border: 2px solid #f5f6fb;
  }

  /* Chrome, Safari and Opera */
  tbody::-webkit-scrollbar {
    width: 6px;
  }

  tbody::-webkit-scrollbar-track {
    background-color: #f5f6fb;
  }

  tbody::-webkit-scrollbar-thumb {
    background-color: #f57828;
    border-radius: 10px;
    border: 0px solid #ffffff;
    height: 130px;
  }

  td {
  }
`;

export const TabletDesctopWrapper = styled.div`
  overflow: hidden;
  opacity: 0;
  pointer-events: none;

  @media (min-width: 768px) {
    overflow: inherit;
    opacity: 1;
    pointer-events: inherit;
  }
`;

export const NavMobileCont = styled.div`
@media (min-width: 768px) {
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
}
`;
