// const { default: styled } = require('@emotion/styled');
import styled from '@emotion/styled';
// import mobile from '../../images/backgroundMobile.svg';
// import tablet from '../../images/backgroundTablet.svg';
// import home from '../../images/backgroundHome.svg';

export const LoginContainer = styled.div`

  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 480px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    width: 1280px;
  }
`;

export const LoginBody = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (min-width: 480px) {
      max-width: 320px;
    }

    @media screen and (min-width: 768px) {
      max-width: 768px;
    }
`;

export const DivEl = styled.div`
  @media screen and (min-width: 320px) {
    max-width: 280px;
    height: 496px;
    background-color: #fff;
    border-radius: 30px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.04em;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 105px;

    p {
      min-width:222px;
      text-align: center;
      padding-left: 29px;
      padding-right: 29px;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;

      p {
        text-align: start;
        padding-left: unset;
        padding-right: unset;
      }
    }
  }

  @media screen and (min-width: 768px) {

    max-width: 426px;
    margin-bottom: 155px;
    height: 552px;
    padding: 56px 84px;
  }

  @media screen and (min-width: 1280px) {
    top: 173px;
    left: 60%;
    margin-top: 0;
    margin-bottom: 125px;
  }

  //
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  Form {
    display: flex;
    flex-direction: column;
  }
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;
    span {
      margin-bottom: 12px;
    }
  }
  a {
    display: block;
    margin-bottom: 32px;
    color: inherit;
  }
  div {
    display: flex;
    gap: 8px;
    justify-content: center;
    @media screen and (min-width: 768px) {
      Button {
        width: 122px;
      }
      gap: 14px;
    }
  }
  input {
    width: 240px;
    height: 52px;
    border-radius: 30px;
    padding: 17px 19px;
    border: none;

    @media screen and (min-width: 768px) {
      width: 259px;
      height: 52px;
    }
  }
`;
