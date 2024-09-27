import styled, { css, ExecutionContext } from 'styled-components';
import { IButtonLinkStyleProps } from './types';
import { ReactComponent as ArrowBoldLeft } from '../../../assets/images/arrowBoldLeft.svg';
import { ReactComponent as ArrowBoldRight } from '../../../assets/images/arrowBoldRight.svg';

const getFont = (props: ExecutionContext & IButtonLinkStyleProps) => {
  const { $bold, $isNumber, theme } = props;
  if ($isNumber) {
    return theme.font.dinpro;
  }
  if ($bold) {
    return theme.font.bold;
  }
  return theme.font.regular;
};

export const ButtonLink = styled.a<IButtonLinkStyleProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${(props) => getFont(props)};
  color: ${({ theme, $color }) =>
    $color ? theme.palette[$color] : theme.palette.black} !important;
  font-size: ${({ $size, $sizeStr }) =>
    $size ? `${$size}px` : $sizeStr ? $sizeStr : '14px'};
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
  ${({ $underline }) =>
    $underline &&
    css`
      text-decoration: underline;
    `}
  ${({ $isMatch }) =>
    $isMatch &&
    css`
      text-decoration: underline;
    `}
  ${({ $uppercase }) =>
    $uppercase &&
    css`
      text-transform: uppercase;
    `}
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.primaryLite} !important;
    }
    &:active {
      color: ${({ theme }) => theme.palette.primaryDark} !important;
    }
  }
  @media (hover: none) {
    &:active {
      color: ${({ theme }) => theme.palette.primaryDark} !important;
    }
  }
`;

export const ArrowIconLeft = styled(ArrowBoldLeft)<{ $color: string }>`
  ${({ $color }) => css`
    fill: ${$color};
  `}
`;
export const ArrowIconRight = styled(ArrowBoldRight)<{ $color: string }>`
  ${({ $color }) => css`
    fill: ${$color};
  `}
`;
