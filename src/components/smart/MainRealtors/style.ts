import styled from 'styled-components';

export const MainRealtors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 200px;
  box-sizing: border-box;
`;
export const MainRealtorsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const MainRealtorsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1rem;
  grid-column-start: 2;
  grid-column-end: 4;
`;
