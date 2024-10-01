import styled, { css } from 'styled-components';

export const ArticlesItem = styled.article<{ $image: string }>`
  border-radius: 20px 0px 20px 0px;
  padding: 32px 24px;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  ${({ $image }) =>
    $image &&
    css`
      background-image: url(${$image});
      background-repeat: no-repeat;
      background-position: 100% 0;
      background-size: 30%;
    `}

  & > * {
    transition: color 0.3s;
  }
  @media (hover: hover) {
    &:hover > * {
      color: ${({ theme }) => theme.palette.primary};
    }
    &:active > * {
      color: ${({ theme }) => theme.palette.black};
    }
  }
  @media (hover: none) {
    &:active > * {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;
export const ArticlesItemTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  margin: 0;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;
export const ArticlesItemDescription = styled.span`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.palette.black};
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;
export const ArticlesItemDate = styled.span`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.palette.greyDark};
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;
