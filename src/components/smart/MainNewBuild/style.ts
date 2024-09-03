import styled from 'styled-components';

export const MainNewBuild = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 200px;
  box-sizing: border-box;
  gap: 0.5rem;

  @media (max-width: 1200px) {
    padding-bottom: 100px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
export const MainNewBuildText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;
export const MainNewBuildCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 1rem;
  grid-column-start: 2;
  grid-column-end: 4;
  @media (max-width: 1024px) {
    grid-column-start: auto;
    grid-column-end: auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
