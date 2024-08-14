import styled from 'styled-components';

export const Tab = styled.div<{ $isMatch: boolean }>`
  padding: 8px 12px;
  border-radius: 2px 2px 0 0;
  background-color: ${({ theme, $isMatch }) =>
    $isMatch ? theme.palette.white : theme.palette.grey};
  font-family: ${({ theme }) => theme.font.regular};
  text-transform: uppercase;
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.palette.black};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
  }
`;
