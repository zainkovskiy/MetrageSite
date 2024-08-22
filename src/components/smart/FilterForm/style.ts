import styled from 'styled-components';

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;
export const FileterButtonWrap = styled.div`
  display: flex;
  gap: 12px;
  width: 50%;
`;
