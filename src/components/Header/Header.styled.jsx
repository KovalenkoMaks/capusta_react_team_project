import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 767px;
  padding: 12px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px){
    max-width: 1280px;
    padding: 10px 32px;
  }
  @media (min-width: 1280px) {
    max-width: 1980px;
    padding: 10px 16px;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (min-width: 768px){
    gap: 0px;
  }
`;
