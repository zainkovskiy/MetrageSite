import styled from 'styled-components';

export const MainNewBuild = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 200px;
  box-sizing: border-box;
`;
export const MainNewBuildText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const MainNewBuildCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 1rem;
  grid-column-start: 2;
  grid-column-end: 4;
`;
