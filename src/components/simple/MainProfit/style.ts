import styled from 'styled-components';

export const MainProfit = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainProfitImg = styled.img`
  width: 100%;
  object-fit: cover;
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
  padding: 40px 60px;
  box-sizing: border-box;
`;
export const MainProfitCards = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  box-sizing: border-box;
`;
export const VerticalLine = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.palette.black};
`;
