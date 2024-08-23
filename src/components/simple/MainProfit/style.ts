import styled from 'styled-components';

export const MainProfit = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainProfitImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 560px;
  }
`;
export const MainProfitImgWrap = styled.div`
  position: relative;
`;
export const MainProfitTitleWrap = styled.div`
  bottom: 0;
  position: absolute;
  max-width: 1440px;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 40px 4vw;
  box-sizing: border-box;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 20px 4vw;
  }
`;
export const MainProfitCardsWrap = styled.div`
  overflow: hidden;
  padding: 40px;
  @media (max-width: 1215px) {
    padding: 0 1rem;
  }
`;
export const MainProfitCards = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
export const VerticalLine = styled.div`
  width: 1px;
  min-width: 1px;
  background-color: ${({ theme }) => theme.palette.black};
`;
