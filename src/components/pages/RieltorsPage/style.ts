import styled from 'styled-components';

export const RieltorsPageTop = styled.div`
  padding-top: 120px;
`;
export const RieltorsPage = styled.div`
  padding: 2rem 0 6rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const RieltorsPageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const RieltorsPageSearchWrap = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RieltorsPageRigth = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const RieltorsPageCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  @media (max-width: 1200px) {
    gap: 1rem;
  }
`;
export const RieltorsPagePagination = styled.div`
  padding-top: 2.5rem;
`;
export const RieltorsPageText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 6rem 0;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;
export const RieltorsPageTextWrap = styled.div`
  max-width: 639px;
  display: flex;
  text-align: center;
`;
export const RieltorsPageInfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const RieltorsPageInfoText = styled.div`
  max-width: 512px;
  margin-bottom: 2rem;
`;
export const RieltorsPageBid = styled.div`
  padding: 4rem 0;
  box-sizing: border-box;
`;
export const RieltorsPageFixForm = styled.div`
  position: sticky;
  top: 76px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
