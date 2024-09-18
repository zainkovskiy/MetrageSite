import styled from 'styled-components';

export const NewBuildingsListPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
`;
export const NewBuildingsListPageItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;
export const NewBuildingsListPagePaggination = styled.div`
  padding-top: 2.5rem;
  box-sizing: border-box;
`;
