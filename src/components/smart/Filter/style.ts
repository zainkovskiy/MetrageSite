import styled from 'styled-components';

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  right: 0;
  left: 0;

  @media (max-width: 768px) {
    top: 20%;
  }
  @media (max-width: 480px) {
    top: 15%;
  }
`;
export const FilterContainer = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  width: 100%;
`;
