import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 235px;
  z-index: 15;
  max-width: 280px;
  box-sizing: border-box;
  max-height: 150px;
  width: 100%;
  padding: 25px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 63px;
  }
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -10%;
    left: 20%;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid #162c5b;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  color: #ffffff;
`;

export const ClickOnMe = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.33;
  position: absolute;
  bottom: 3px;
`;
