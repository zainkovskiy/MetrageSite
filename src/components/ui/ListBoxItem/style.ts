import styled from 'styled-components';

export const ListBoxItem = styled.span`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  font-size: 14px;
  transition: color 0.3s;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
    &:active {
      color: ${({ theme }) => theme.palette.black};
    }
  }
`;
