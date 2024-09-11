import styled from 'styled-components';

export const FilterSell = styled.form`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: #fff;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;
export const FilterBuyInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
