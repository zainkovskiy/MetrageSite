import styled from 'styled-components';

export const BuyPageFullTop = styled.div`
  padding-top: 120px;
  padding-bottom: 2rem;
  box-sizing: border-box;
  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 1.5rem;
  }
`;
export const BuyPageFull = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 2rem;
  box-sizing: border-box;
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
export const BuyPageFullRight = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;
export const BuyPageFullAddress = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;
export const BuyPageFullPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: nowrap;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
export const BuyPageFullPhotoWrap = styled.div`
  border-radius: 0 0 0 40px;
  overflow: hidden;
  display: flex;
  width: 100%;
`;
export const BuyPageFullPhotoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  max-height: 600px;
`;
export const BuyPageFullPhotoSmallContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 25%;
  gap: 0.5rem;
`;
export const BuyPageFullPhotoSmallWrap = styled.div`
  overflow: hidden;
  display: flex;
  &:first-child {
    border-radius: 0 40px 0 0;
  }
`;
export const BuyPageFullPhotoImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const BuyPageFullPhotoSmallImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const BuyPageFullCharacteristics = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 0;
  box-sizing: border-box;
  @media (min-width: 768px) {
    width: 25rem;
  }
`;
export const BuyPageFullCharacteristicsItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const BuyPageFullDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
`;
export const BuyPageFulSimilar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
`;
export const BuyPageFulSimilarItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;
export const BuyPageFullContacts = styled.div`
  position: sticky;
  top: 76px;
  display: grid;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 4rem;
  }
`;
export const BuyPageFullMap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;
`;
