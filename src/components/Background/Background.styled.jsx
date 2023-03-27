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

export const SingleKapustaBottEl = styled.div`
  position: absolute;
  z-index: -5;
  bottom: 0;
  left: 35px;
  display: inline;

  @media screen and (min-width: 768px) {
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    display: none;
  }
`;
export const SingleKapustaTopEl = styled.div`
  position: absolute;
  z-index: -5;
  top: 150px;
  right: -34px;
  transform: rotate(180deg);
  display: inline;

  @media screen and (min-width: 480px) {
    right: 0;
  }

  @media screen and (min-width: 768px) {
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    display: none;
  }
`;

export const TwoKapustasEl = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    position: absolute;
    z-index: -5;
  }
`;

export const ManyKapustasEl = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    position: absolute;
    z-index: -5;
    top: 84px;
    left: 10px;
  }
`;
