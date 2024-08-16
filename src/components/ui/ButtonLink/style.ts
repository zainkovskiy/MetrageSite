import styled, { css } from 'styled-components';
import { IButtonLinkStyleProps } from './types';
import { ReactComponent as ArrowBoldLeft } from '../../../assets/images/arrowBoldLeft.svg';
import { ReactComponent as ArrowBoldRight } from '../../../assets/images/arrowBoldRight.svg';

export const ButtonLink = styled.a<IButtonLinkStyleProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme, $bold }) =>
    $bold ? theme.font.bold : theme.font.regular};
  color: ${({ theme, $color }) =>
    $color ? theme.palette[$color] : theme.palette.black};
  font-size: ${({ $size }) => ($size ? `${$size}px` : '14px')};
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
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
      color: ${({ theme }) => theme.palette.primaryLite};
    }
    &:active {
      color: ${({ theme }) => theme.palette.primaryDark};
    }
  }
  @media (hover: none) {
    &:active {
      color: ${({ theme }) => theme.palette.primaryDark};
    }
  }
`;

export const ArrowIconLeft = ArrowBoldLeft;
export const ArrowIconRight = ArrowBoldRight;
