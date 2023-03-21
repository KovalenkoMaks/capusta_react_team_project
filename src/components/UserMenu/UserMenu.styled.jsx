import styled from '@emotion/styled';

export const UserAvatarContainer = styled.div`
width: 32px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
color: #52555F;
background-color: #F5F6FA;
`;

export const LogOutIconBtn = styled.div`
  display: flex;

  @media (min-width: 768px){
  display: none;
  }
`;

export const UserNameContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    width: 1px;
    height: 36px;
    background-color: #e0e5eb;
    margin-left: 20px;
  }
  @media (min-width: 768px) {
    display: flex;
    margin-left: 10px;
  }
`;

export const UserName = styled.div`
 display: none;

  @media (min-width: 768px){
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: #52555f;
  }
`;




export const LogOutTextBtn = styled.div`
  display: none;
  @media (min-width: 768px){
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  margin-left: 15px;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: #52555f;
  padding: 10px;
  cursor: pointer;
  text-decoration-line: underline;
  }
`
