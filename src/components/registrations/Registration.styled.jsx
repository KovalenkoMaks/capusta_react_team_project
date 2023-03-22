const { default: styled } = require('@emotion/styled');

export const DivEl = styled.div`
  /* display: flex; */
  position: absolute;
  top: 255px;
  min-width: 280px;
  margin-left: auto;
  margin-right: auto;
  height: 496px;
  background-color: #fff;
  border-radius: 30px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;
  padding: 40px 20px;
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
  }
`;
