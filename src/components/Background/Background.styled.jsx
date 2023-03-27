const { default: styled } = require('@emotion/styled');

export const SplitContainerEl = styled.div`
  height: 100vh;
  background-color: #fff;
  position: absolute;
  z-index: -50;
`;

export const GreyPart = styled.div`
  background-color: #f2f5fc;
  width: 100vw;
  height: 320px;
  border-bottom-left-radius: calc(100vw / 4);

  @media screen and (min-width: 480px) {
    border-bottom-left-radius: 120px;
  }

  @media screen and (min-width: 768px) {
    height: 583px;
  }

  @media screen and (min-width: 1280px) {
    height: 68.5vh;
    min-height: 583px;
  }
`;

