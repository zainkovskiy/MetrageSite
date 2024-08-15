import styled, { css } from 'styled-components';
import { IButtonStyleProps } from './types';

const buttonCss = css<IButtonStyleProps>`
  outline: none;
  padding: ${(props) => (props.$small ? '7.5px 40px' : '14px 40px')};
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${(props) => (props.$small ? '12px' : '14px')};
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  transition: background-color 0.3s, border 0.3s, color 0.3s;
  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
const buttonDefaultCss = css`
  color: ${({ theme }) => theme.palette.white};
  box-shadow: rgba(0, 0, 0, 0.02) 0 2px 3px 0, rgba(0, 0, 0, 0.03) 0 6px 5px 0,
    rgba(0, 0, 0, 0.04) 0 12px 10px 0, rgba(0, 0, 0, 0.04) 0 22px 16px 0,
    rgba(0, 0, 0, 0.05) 0 40px 32px 0, rgba(0, 0, 0, 0.06) 0 100px 80px 0,
    rgba(0, 0, 0, 0.05) 0 0 20px 0;
  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.primaryLite};
      border: 1px solid ${({ theme }) => theme.palette.primaryLite};
    }
    &:active {
      background-color: ${({ theme }) => theme.palette.primaryDark};
      border: 1px solid ${({ theme }) => theme.palette.primaryDark};
    }
  }
  @media (hover: none) {
    &:active {
      background-color: ${({ theme }) => theme.palette.primaryDark};
      border: 1px solid ${({ theme }) => theme.palette.primaryDark};
    }
  }
`;
export const Button = styled.button<IButtonStyleProps>`
  ${buttonCss}
  ${buttonDefaultCss}
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.02),0px 6px 5px 0px rgba(0, 0, 0, 0.03),0px 12px 10px 0px rgba(0, 0, 0, 0.04),0px 22px 16px 0px rgba(0, 0, 0, 0.04),0px 40px 32px 0px rgba(0, 0, 0, 0.05),0px 100px 80px 0px rgba(0, 0, 0, 0.06),0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
  ${({ color, theme }) => {
    if (color === 'primary') {
      return css`
        background-color: ${theme.palette.primary};
        border: 1px solid ${theme.palette.primary};
      `;
    }
    if (color === 'black') {
      return css`
        background-color: ${theme.palette.black};
        border: 1px solid ${theme.palette.black};
        color: ${theme.palette.white};
      `;
    }
  }};
`;

const buttonOutlineCss = css`
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.primary};
  @media (hover: hover) {
    &:hover {
      border: 1px solid ${({ theme }) => theme.palette.primaryLite};
      color: ${({ theme }) => theme.palette.primaryLite};
    }
    &:active {
      border: 1px solid ${({ theme }) => theme.palette.primaryDark};
      color: ${({ theme }) => theme.palette.primaryDark};
    }
  }
  @media (hover: none) {
    &:active {
      border: 1px solid ${({ theme }) => theme.palette.primaryDark};
      color: ${({ theme }) => theme.palette.primaryDark};
    }
  }
`;
export const ButtonOutline = styled.button<IButtonStyleProps>`
  ${buttonCss}
  ${buttonOutlineCss}
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
  ${({ color, theme }) => {
    if (color === 'primary') {
      return css`
        border: 1px solid ${theme.palette.primary};
        color: ${theme.palette.primary};
      `;
    }
    if (color === 'black') {
      return css`
        border: 1px solid ${theme.palette.black};
        color: ${theme.palette.black};
      `;
    }
  }};
`;
const buttonTextCss = css`
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.primary};
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
export const ButtonText = styled.button<IButtonStyleProps>`
  ${buttonCss}
  ${buttonTextCss}
    ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};
`;
