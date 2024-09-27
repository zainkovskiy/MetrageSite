import styled from 'styled-components';

export const AboutFlamp = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 1rem;
  @media (max-width: 1024px) {
    margin-top: 120px;
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    grid-template-columns: 1fr;
  }
`;
export const AboutFlampReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: 30px 0 0 0;
  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;
export const AboutFlampReviewWrap = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 1rem;
    padding: 4rem;
  }
  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
  @media (max-width: 480px) {
    padding: 2rem;
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
  }
`;
export const AboutFlampRight = styled.div`
  display: grid;
  grid-template-rows: 200px 250px;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-rows: 150px 150px;
  }
`;
export const AboutFlampText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.greyLight};
  width: 100%;
  padding: 4rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;
export const AboutFlampIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e6be6;
  width: 100%;
`;
export const AboutFlampIconImg = styled.img`
  width: 146px;
  height: 120px;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 90px;
    height: 74px;
  }
`;
