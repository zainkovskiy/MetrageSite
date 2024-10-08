import styled, { css } from 'styled-components';
import { ITextStyleProps } from './types';

export const Text = styled.span<ITextStyleProps>`
  font-family: ${({ theme, $bold }) =>
    $bold ? theme.font.bold : theme.font.regular};
  color: ${({ theme, $color }) =>
    $color ? theme.palette[$color] : theme.palette.black};
  font-size: ${({ $size, $sizeStr }) =>
    $size ? `${$size}px` : $sizeStr ? $sizeStr : '14px'};
  ${({ $nowrap }) =>
    $nowrap &&
    css`
      white-space: nowrap;
    `};
`;
