import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  gap: 1rem;
`;
export const PaginationItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary};
  font-family: ${({ theme }) => theme.font.dinpro};
  font-size: 16px;
  transition: color 0.3s;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.black};
    }
    &:active {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
  @media (hover: none) {
    &:active {
      color: ${({ theme }) => theme.palette.black};
    }
  }
`;
