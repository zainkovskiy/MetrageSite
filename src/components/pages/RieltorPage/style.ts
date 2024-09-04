import styled from 'styled-components';

export const RieltorPageTop = styled.div`
  padding-top: 120px;
  padding-bottom: 2rem;
  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 1.5rem;
  }
`;
export const RieltorPage = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 4rem;
  box-sizing: border-box;
  row-gap: 0;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const RieltorPageRight = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const RieltorPageInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const RieltorPageObjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  padding-top: 2rem;
  box-sizing: border-box;
`;
export const RieltorPageImg = styled.img`
  border-radius: 40px 0;
  height: 29rem;
  width: 100%;
  object-fit: cover;
`;
export const RieltorPageImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RieltorPageRewardsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RieltorPageRewards = styled.div`
  display: flex;
  gap: 0.2rem;
`;
export const RieltorPageRewardImg = styled.img`
  height: 80px;
  object-fit: cover;
  width: 60px;
`;
export const RieltorPageFixForm = styled.div`
  position: sticky;
  top: 76px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RieltorPageContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const RealtorPageNetwork = styled.a<{ $image: string }>`
  width: 28px;
  height: 28px;
  display: block;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
  background-image: url(${({ $image }) => $image && $image});
`;
