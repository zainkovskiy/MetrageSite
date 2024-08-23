import styled from 'styled-components';

export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 200px;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
export const MainInfoTextWrap = styled.div`
  max-width: 370px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const MainInfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-column-start: 2;
  grid-column-end: 4;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-start: auto;
    grid-column-end: auto;
  }
`;
