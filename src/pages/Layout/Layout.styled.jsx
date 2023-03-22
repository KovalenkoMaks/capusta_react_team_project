const { default: styled } = require('@emotion/styled');

export const DivEl = styled.div`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 320px;
  height: 856px;
  background-image: url('../../images/backgroundMobile.svg');

  @media screen and (min-width: 768px) {
    max-width: 768px;
    width: 768px;
    height:1024px;
    background-image: url('../../images/backgroundTablet.svg');
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    width: 1280px;
    height: 850px;
    background-image: url('../../images/backgroundHome.svg');
  }
`;

