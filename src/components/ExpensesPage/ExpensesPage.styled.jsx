import { NavLink } from 'react-router-dom';

const { default: styled } = require('@emotion/styled');

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 60px;
    margin-left: 50px;
  }

  @media (min-width: 1280px) {
    justify-content: center;
    margin-bottom: 8px;
    margin-left: 0;
  }

  .reports {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    padding-top: 14px;

    @media screen and (min-width: 768px) {
      position: absolute;

      right: -15px;
      top: -4px;
    }

    @media screen and (min-width: 1280px) {
      right: -34px;
    }

    a {
      color: rgba(82, 85, 95, 0.7);
      display: flex;
      gap: 15px;
      align-items: center;
    }
  }

  .title {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: rgba(82, 85, 95, 0.7);
    margin-bottom: 8px;
    margin-top: 32px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 20px;
      margin-top: 0;
    }
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
      flex-wrap: nowrap;
      justify-content: unset;
      align-items: center;
    }

    form {
      display: flex;
    }

    .input {
      width: 140px;
      height: 44px;
      border-radius: 20px 0 0 20px;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      border: 2px solid #ffffff;
      padding: 12px 20px 12px 12px;
      background-color: transparent;
      @media screen and (max-width: 767.99px) {
        border-right: 1px solid #ffffff;
      }

      @media screen and (min-width: 768px) {
        margin-right: 15px;
        width: 125px;

        border-radius: 16px;
      }
    }

    .input::placeholder {
      text-align: right;
      font-weight: 700;
      color: black;
    }

    .input:hover,
    .input:focus {
      border-color: #ffac77;
    }

    .ant-input-disabled {
      background-color: transparent;
      cursor: default;
      border-color: #ffffff;
    }

    .button {
      width: 142px;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      border: 2px solid #ffffff;
      border-radius: 0 20px 20px 0;
      color: rgba(82, 85, 95, 0.7);

      height: 44px;

      @media screen and (max-width: 767.99px) {
        border-right: 1px solid #ffffff;
      }

      @media screen and (min-width: 768px) {
        width: 125px;
        border-radius: 16px;
      }
    }
  }
`;

export const ExpensCont = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 760px) and (max-width: 1279.9px) {
    margin-bottom: 298px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1098px;
    margin-left: -29px;
  }
`;

export const Navigations = styled.div`
  @media screen and (max-width: 767.9px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 5;
    background-color: #fff;
    display: flex;
    gap: 4px;
  }
`;

export const Link = styled(NavLink)`
  width: calc((100% / 2) - 2px);
  height: 53px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background-color: #f5f6fb;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: #ff751d;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 40px;
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
  }
`;

export const FormWrapper = styled.div`
  @media screen and (min-width: 768px) {
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
    width: 704px;
    height: 616px;
    background-color: #fff;
    padding: 24px 40px 42px 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1098px;
    height: 579px;
    padding: 32px;
  }
`;

export const FormContainer = styled.div`

  .formmm {
    display: flex;
    align-items: center;
    margin-top: 16px;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
      justify-content: center;
      margin-top: 0;
    }

    @media screen and (min-width: 1280px) {
      flex-wrap: nowrap;
    }
  }

  .productdesc {
    width: 280px;
    border: 2px solid #ffffff;
    border-radius: 14px 14px 0 0;
    padding: 9px 21px;
    height: 44px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: #c7ccdc;
    background-color: transparent;

    @media screen and (min-width: 768px) {
      width: 184px;
      border-radius: 14px 0 0 0;
      padding: 9px 19px;
      margin-left: 15px;
      border: 2px solid #f5f6fb;
    }

    @media screen and (min-width: 1280px) {
      width: 290px;
      height: 40px;
      margin-left: 30px;
    }

    &:hover {
      border-color: #ffac77;
      z-index: 2;
    }

    &::placeholder {
      color: #c7ccdc;
    }
  }

  .calc {
    width: 140px;
    gap: 12px;
    justify-content: flex-end;
    height: 44px;
    border-radius: 22px;
    margin-left: -2px;
    border: 2px solid #fff;
    background-color: transparent;
    padding: 0 11px 0 11px;

    &:hover,
    &:focus {
       .ant-input-suffix {
        border-color: #ffac77;
      }
      border-color: #ffac77;
    }

    @media screen and (min-width: 768px) {
      width: 110px;
      gap: 12px;
      justify-content: flex-end;
      height: 44px;
      border-radius: 0 14px 14px 0;
      margin-left: -2px;
      border: 2px solid #f5f6fb;
    }

    @media screen and (min-width: 1280px) {
      width: 119px;
      margin-right: 32px;
      height: 40px;
    }
  }
  @media screen and (max-width: 767.9px) {
    .ant-input-affix-wrapper .ant-input-suffix {
      margin-inline-start: 0;
      padding-inline-start: 10px;
      border-left: 2px solid #ffffff;
    }

    .ant-input-affix-wrapper .ant-input {
      background-color: transparent;

      &::placeholder {
        text-align: right;
      }


    }
  }

  .category .ant-select-selector {
    width: 280px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    border: 2px solid #ffffff;
    background-color: transparent;
    color: #c7ccdc;
    border-radius: 0 0 14px 14px;
    height: 44px;
    margin-top: -2px;
    padding: 0px 20px;
    transition: all 0.2s;
    z-index: 1;

    @media screen and (min-width: 768px) {
      width: 186px;
      border: 2px solid #f5f6fb;
      border-radius: 0;
      margin-left: -2px;
      margin-top: 0;
    }

    @media screen and (min-width: 1280px) {
      width: 169px;
      height: 40px;
    }
  }

  .category {
    @media screen and (max-width: 767.9px) {
      margin-bottom: 32px;
    }
  }

  .category .ant-select-arrow {
    transition: transform 250ms ease-in-out, color 250ms ease-in-out;
    z-index: 1;
  }

  .category.ant-select-open .ant-select-arrow {
    transform: rotate(180deg);
    color: #ff914a;
  }

  .btncont {
    margin-top: 82px;
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 768px) {
      margin-top: 32px;
      gap: 15px;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 0;
      gap: 16px;
    }
  }
`;

export const TableContainer = styled.div`
  margin-top: 48px;

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }

  table {
    border-collapse: collapse; /* optional */
  }

  thead,
  tbody {
    border: 0;
    padding: 0;
  }

  tr {
    height: 38px;
    border: 2px solid #f5f6fb;
    width: 624px;
    background-color: #fff;

    // display: inline-flex;

    @media screen and (min-width: 1280px) {
      width: 746px;
      height: 40px;
    }
  }

  /* Chrome, Safari and Opera */
  tbody::-webkit-scrollbar {
    width: 6px;
  }

  tbody::-webkit-scrollbar-track {
    background-color: #f5f6fb;
  }

  tbody::-webkit-scrollbar-thumb {
    background-color: #ff751d;
    border-radius: 10px;
    border: 0px solid #ffffff;
    height: 130px;
  }
`;

export const NavMobileCont = styled.div`
  margin-top: -24px;

  a {
    display: flex;
    gap: 4px;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000;

    svg {
      height: 9px;
      width: 14px;
    }
  }
`;

export const MobTable = styled.div`
  display: flex;
  gap: 20px;
  height: 46px;
  border-bottom: 1px solid #f5f6fb;
  background-color: #fff;
  align-items: center;
  padding: 8px 0;

  .mobCont {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-right: auto;

    div {
      display: flex;
      gap: 20px;
    }
  }

  .mobDesc {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: #52555f;
    text-transform: capitalize;
  }

  .mobDate {
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #52555f;
  }

  .mobCateg {
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.04em;

    color: #52555f;
  }

  .mobAmount {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    letter-spacing: 0.04em;
    color: #e7192e;
  }

  .incomeMobAmount {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    letter-spacing: 0.04em;
    color: #407946;
  }
`;

export const TBodyEl = styled.tbody`
  display: block;
  height: 342px;
  width: 624px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  overflow-x: hidden;
  border: 2px solid #f5f6fb;

  @media screen and (min-width: 1280px) {
    width: 746px;
    height: 360px;
  }
`;

export const THeadEl = styled.thead`
  .tHead {
    background-color: #f5f6fb;
    border-radius: 20px 20px 0 0;
    display: flex;
    padding: 11px 46px 11px 20px;
    // justify-content: space-between;
    // align-items: center;

    @media screen and (min-width: 1280px) {
      padding: 15px 21px 16px 29px;
    }
  }

  .tHead .dell {
    width: 20px;

    @media screen and (min-width: 1280px) {
      width: 32px;
    }
  }

  .tHead th {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .thDate {
    padding-right: 80px;
    @media screen and (min-width: 1280px) {
      padding-right: 73px;
    }
  }

  .thDesc {
    padding-right: 116px;
    @media screen and (min-width: 1280px) {
      padding-right: 168px;
    }
  }

  .thCat {
    padding-right: 111px;
    @media screen and (min-width: 1280px) {
      padding-right: 126px;
    }
  }
`;

export const BodyTrEl = styled.tr`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #52555f;

  padding: 13px 28px 13px 20px;

  @media screen and (min-width: 1280px) {
    padding-right: 46px;
  }

  .date {
    text-transform: uppercase;
    width: 68px;
  }

  .decs {
    padding-left: 45px;
    width: 209px;
    padding-right: 27px;

    @media screen and (min-width: 1280px) {
      width: 268px;
      padding-right: 35px;
    }
  }

  .categ {
    width: 124px;
    text-align: center;

    @media screen and (min-width: 1280px) {
      width: 116px;
    }
  }

  .amount {
    width: 104px;
    margin-left: auto;
    color: #e7192e;
    text-align: right;
    font-weight: 700;

    margin-right: 38px;

    @media screen and (min-width: 1280px) {
      text-align: center;
      width: 147px;
      margin-right: 9px;
    }
  }

  .incomeAmount {
    width: 104px;
    margin-left: auto;
    color: #407946;
    text-align: right;
    font-weight: 700;
    margin-right: 38px;

    @media screen and (min-width: 1280px) {
      text-align: center;
      width: 147px;
      margin-right: 9px;
    }
  }

  .del {
    width: 20px;

    @media screen and (min-width: 1280px) {
      background-color: transparent;
      width: 32px;
      padding-left: 0;
      padding: 7px;
      transition: background-color 250ms ease-in-out;
      border-radius: 50%;

      &:hover,
      &:focus {
        background-color: #f5f6fb;
      }
    }
  }
`;
export const TableWrapper = styled.div`
  display: block;
  justify-content: space-around;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
