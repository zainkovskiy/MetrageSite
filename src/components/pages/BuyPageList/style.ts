import styled from 'styled-components';

export const BuyPageList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BuyPageListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 3rem 2rem;
  padding-top: 2.5rem;
  box-sizing: border-box;
`;
export const BuyPageListPagination = styled.div`
  padding: 2.5rem 0;
  box-sizing: border-box;
`;
