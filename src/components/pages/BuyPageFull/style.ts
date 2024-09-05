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
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const BuyPageFullRight = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;
export const BuyPageFullAddress = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 768px) {
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
`;
export const BuyPageFullPhotoSmallImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
