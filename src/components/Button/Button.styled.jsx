import styled from '@emotion/styled';

export const StyledBtn = styled.button`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  width: ${props => props.width};
  height: 44px;
  font-weight: 700;
  color: #52555F;
  text-transform: uppercase;
  border-radius: 16px;
  border: 2px solid #F6F7FC;
  background-color: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

    &:hover {
    background-color: #ff751d;
    color: #ffffff;
    border: none;
  }
 `;
