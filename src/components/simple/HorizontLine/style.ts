import styled from 'styled-components';

export const HorizontLine = styled.div<{ $color?: string }>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme, $color }) =>
    $color ? $color : theme.palette.black};
`;
