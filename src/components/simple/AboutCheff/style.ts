import styled from 'styled-components';
import quotesUrl from '../../../assets/images/quotes.svg';
export const AboutCheff = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 1rem;
  @media (max-width: 1024px) {
    margin-top: 150px;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    grid-template-columns: 1fr;
  }
`;
export const AboutCheffImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px 0 0 0;
`;
export const AboutChefText = styled.div`
  background-image: url(${quotesUrl});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.greyLight};
  padding: 120px 80px 60px 80px;
  background-repeat: no-repeat;
  background-position: 80px 60px;
  border-radius: 0 0 30px 0;
  gap: 4rem;
  @media (max-width: 1024px) {
    background-size: 30px;
    background-position: 40px 20px;
    padding: 3rem 2rem 2rem 2rem;
    gap: 2rem;
  }
`;
