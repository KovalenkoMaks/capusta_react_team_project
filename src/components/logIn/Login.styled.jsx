const { default: styled } = require('@emotion/styled');

export const DivEl = styled.div`
  /* display: flex; */
  @media screen and (min-width: 320px) {
    position: absolute;
    z-index: 3;
    top: 255px;
    max-width: 280px;
    left: 7%;
    right: 7%;
    height: 496px;
    background-color: #fff;
    border-radius: 30px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.04em;
    padding: 40px 20px;
  }

  @media screen and (min-width: 768px) {
    top: 317px;
    max-width: 426px;
    left: 22%;
    height: 552px;
    padding: 56px 84px;
  }

  @media screen and (min-width: 1280px) {
    top: 173px;
    left: 60%;
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
  p {
    margin-bottom: 16px;
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
    a {
      margin-bottom: 0;
    }
  }
  input {
    width: 240px;
    height: 52px;
    border-radius: 30px;
    padding: 17px 19px;

    @media screen and (min-width: 768px) {
      width: 259px;
      height: 52px;
    }
  }
`;
