import styled from 'styled-components';

export const SelectItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.black};
  font-family: ${({ theme }) => theme.font.regular};
  transition: color 0.3s;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    &:active {
      color: ${({ theme }) => theme.palette.black};
    }
    @media (hover: none) {
      &:active {
        color: ${({ theme }) => theme.palette.primary};
      }
    }
  }
`;
