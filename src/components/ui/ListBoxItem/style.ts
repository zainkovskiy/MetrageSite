import styled from 'styled-components';

export const ListBoxItem = styled.span<{ $isActive?: boolean; $size?: number }>`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.palette.greyDark : theme.palette.black};
  font-size: ${({ $size }) => ($size ? `${$size}px` : '14px')};
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
