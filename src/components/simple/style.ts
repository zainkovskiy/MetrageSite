import styled from 'styled-components';

export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 200px;
  box-sizing: border-box;
`;
export const MainInfoTextWrap = styled.div`
  max-width: 370px;
`;
export const MainInfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-column-start: 2;
  grid-column-end: 4;
`;
