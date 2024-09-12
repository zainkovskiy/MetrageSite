import styled from 'styled-components';

export const ObjectFullTop = styled.div`
  padding-top: 120px;
  padding-bottom: 2rem;
  box-sizing: border-box;
  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 1.5rem;
  }
`;
export const ObjectFullPage = styled.div`
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
export const ObjectFullRight = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;
export const ObjectFullAddress = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;
export const ObjectFullPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: nowrap;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
export const ObjectFulllPhotoWrap = styled.div`
  border-radius: 0 0 0 40px;
  overflow: hidden;
  display: flex;
  width: 100%;
`;
export const ObjectFullPhotoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  max-height: 600px;
`;
export const ObjectFullPhotoSmallContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 25%;
  gap: 0.5rem;
`;
export const ObjectFullPhotoSmallWrap = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  &:first-child {
    border-radius: 0 40px 0 0;
  }
`;
export const ObjectFullPhotoImg = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const ObjectFullPhotoSmallImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const ObjectFullCountImage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 44px;
  color: #fff;
  font-family: ${({ theme }) => theme.font.dinpro};
  pointer-events: none;
`;
export const ObjectFullCharacteristics = styled.div`
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
export const ObjectFullCharacteristicsItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ObjectFullDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
`;
export const ObjectFullSimilar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
`;
export const ObjectFullSimilarItems = styled.div`
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
export const ObjectFullContacts = styled.div`
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
export const ObjectFullMap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;
`;
