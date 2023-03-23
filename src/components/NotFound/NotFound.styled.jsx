import styled from '@emotion/styled';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 30px;

  img {
    max-width: 320px;
    @media (min-width: 768px) {
        max-width: 580px;
    }
  }

  button {
    box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  }
`;
