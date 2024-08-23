import styled from 'styled-components';

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FilterFormInputs = styled.div<{ $columns?: number }>`
  display: grid;
  grid-template-columns:
    repeat(
      ${(props) => (props.$columns ? props.$columns : 3)},
      minmax(100px, 200px)
    )
    minmax(200px, 1fr);
  grid-gap: 0.5rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: #fff;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FileterButtonsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 0;
  box-sizing: border-box;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    background-color: #fff;
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`;
export const FileterButtonsWrapRight = styled.div`
  grid-column-start: 2;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) {
    grid-column-start: auto;
  }
`;
