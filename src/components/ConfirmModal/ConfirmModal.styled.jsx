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
`;

export const ModalTitle = styled.p`
font-size: 19px;
`;
export const CloseButton = styled.button`
position: absolute;
  top: 20px;
  right: 20px;
font-size: 19px;
`;

