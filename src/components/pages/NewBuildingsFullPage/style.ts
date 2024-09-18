import styled from 'styled-components';

export const NewBuildingsFullTop = styled.div`
  padding-top: 120px;
  padding-bottom: 2rem;
  box-sizing: border-box;
  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 1.5rem;
  }
`;
export const NewBuildingsFullTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;
export const NewBuildingsFullPage = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 0 4rem 0;
  box-sizing: border-box;
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    column-gap: 0;
  }
`;
export const NewBuildingsFullRight = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;
export const NewBuildingsFullPhotoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  max-height: 600px;
`;
export const NewBuildingsFulllPhotoWrap = styled.div`
  border-radius: 0 0 0 40px;
  overflow: hidden;
  display: flex;
  width: 100%;
`;
export const NewBuildingsFullPhotoImg = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const NewBuildingsFullPhotoSmallContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 25%;
  gap: 0.5rem;
`;
export const NewBuildingsFullPhotoSmallWrap = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  &:first-child {
    border-radius: 0 40px 0 0;
  }
`;
export const NewBuildingsFullPhotoSmallImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const NewBuildingsFullAddressWrap = styled.div`
  padding-top: 1rem;
  box-sizing: border-box;
`;
export const NewBuildingsFullDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4rem;
  box-sizing: border-box;
`;
export const NewBuildingsFullCountImage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 44px;
  color: #fff;
  font-family: ${({ theme }) => theme.font.dinpro};
  pointer-events: none;
`;
export const NewBuildingsFullCharacteristics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  box-sizing: border-box;
`;
export const NewBuildingsFullCharacteristicsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  width: 100%;
  gap: 2rem;
`;
export const NewBuildingsFullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  box-sizing: border-box;
  gap: 1rem;
`;
export const NewBuildingsFullBuyMethodCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NewBuildingsFullObject = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 64px 0;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.02),
    0px 6px 5px 0px rgba(0, 0, 0, 0.03), 0px 12px 10px 0px rgba(0, 0, 0, 0.04),
    0px 22px 16px 0px rgba(0, 0, 0, 0.04), 0px 40px 32px 0px rgba(0, 0, 0, 0.05),
    0px 100px 80px 0px rgba(0, 0, 0, 0.06), 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 20rem;
`;
export const Dots = styled.span`
  border-bottom: 1px dashed black;
  min-width: 1rem;
  flex-grow: 1;
`;
export const NewBuildingsFullContacts = styled.div`
  position: sticky;
  top: 76px;
  display: grid;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
