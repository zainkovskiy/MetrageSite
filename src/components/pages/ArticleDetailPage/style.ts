import styled, { css } from 'styled-components';
import { KnownTarget } from 'styled-components/dist/types';

export const ArticleDetailPage = styled.article`
  padding-bottom: 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 480px) {
    padding-top: 80px;
  }
`;
export const ArticleDetailPageBread = styled.article`
  padding-top: 120px;
  padding-bottom: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 480px) {
    padding-top: 80px;
  }
`;
const getFontSizeTitle = (as: KnownTarget) => {
  switch (as) {
    case 'h1':
      return 'clamp(32px, 4vw, 56px)';
    case 'h2':
      return 'clamp(26px, 4vw, 44px)';
    case 'h3':
      return 'clamp(20px, 4vw, 24px)';
    case 'h4':
      return 'clamp(18px, 4vw, 20px)';
    default:
      return 'clamp(32px, 4vw, 56px)';
  }
};
const getFontSizeText = (type: string) => {
  switch (type) {
    case 'b1':
      return 'clamp(18px, 2.5vw, 24px)';
    case 'b2':
      return 'clamp(16px, 2.5vw, 20px)';
    case 'b3':
      return '14px';
    case 'b4':
      return '12px';
    default:
      return '14px';
  }
};
export const ArticleDetailPageTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  font-size: ${(props) =>
    props.as ? getFontSizeTitle(props.as) : 'clamp(32px, 4vw, 56px)'};
  margin: 0;
`;
export const ArticleDetailPageText = styled.span<{ $type: string }>`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  font-size: ${({ $type }) => ($type ? getFontSizeText($type) : '14px')};
  text-align: justify;
`;
export const ArticleDetailPageImg = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 700px;
`;
export const ArticleDetailPageList = styled.ul`
  margin: 0;
  padding: 0 0 0 1rem;
  box-sizing: border-box;
`;
export const ArticleDetailPageListItem = styled.li`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  font-size: 16px;
  margin-top: 0.5rem;
  &:first-child {
    margin-top: 0;
  }
`;
