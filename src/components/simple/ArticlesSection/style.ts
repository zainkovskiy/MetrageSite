import styled from 'styled-components';

export const ArticlesSection = styled.div``;
export const ArticlesSectionTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  font-size: clamp(26px, 4vw, 44px);
`;
export const ArticlesSectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
  }
`;
