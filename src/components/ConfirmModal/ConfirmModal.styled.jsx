import styled from '@emotion/styled';

export const Overlay = styled.div`
z-index: 15;
position: fixed;
left: 0;
top: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
position: relative;
width: 380px;
padding:  50px 58px 60px;
background-color: #fff;
box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
border-radius: 30px;
`;

export const ModalTitle = styled.p`
margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;
export const CloseButton = styled.button`
position: absolute;
top: 20px;
right: 20px;
cursor: pointer;
 transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
 &:hover {
    transform: scale(0.9);
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

