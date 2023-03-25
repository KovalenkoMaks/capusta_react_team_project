import styled from '@emotion/styled';

export const SignButton = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 120px;
  margin-bottom: 32px;
  padding: 10px 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: #000000;
  background: #F6F7FB;
  border-radius: 26px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));
  cursor: pointer;

  &:hover {
   transform: scale(0.9);}
`;

