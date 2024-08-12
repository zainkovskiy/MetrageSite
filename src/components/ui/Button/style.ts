import styled, { css } from 'styled-components';

const buttonCss = css`
  outline: none;
  padding: 16px 40px;
  font-family: ${({ theme }) => theme.font.regular};
  text-transform: uppercase;
`;

export const Button = styled.button`
  ${buttonCss}
  border: 1px solid;
`;
export const ButtonOutline = styled.button`
  ${buttonCss}
  border: 1px solid ${({ theme }) => theme.palette.primary};
`;
