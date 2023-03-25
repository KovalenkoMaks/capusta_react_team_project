import styled from '@emotion/styled';

const setBackgroundColor = props => {
  if (props.disabled) {
    return '#d5d5d5';
  }
  return props.backgroundColor;
};

export const StyledBtn = styled.button`
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  width: ${props => props.width};
  height: 44px;
  font-weight: 700;
  color: ${props => props.textColor};
  text-transform: uppercase;
  border-radius: 16px;
  border: ${props => props.border};
  background-color: ${setBackgroundColor};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: ${props => props.filter};
  cursor: pointer;

    &:hover {
   transform: scale(0.9);
  }
 `;
