import styled, { css } from 'styled-components';
import { IInputStyleProps } from './type';

export const InputContainer = styled.div<IInputStyleProps>`
  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input<IInputStyleProps>`
  padding: ${(props) => (props.$small ? '5px 16px' : '13px 16px')};
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.grey};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.palette.black};
  outline: none;
  border-radius: 2px;
  transition: border 0.3s, box-shadow 0.3s;
  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
  &:focus {
    border-color: ${({ theme }) => theme.palette.black};
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.02),
      0px 6px 5px 0px rgba(0, 0, 0, 0.03), 0px 12px 10px 0px rgba(0, 0, 0, 0.04),
      0px 22px 16px 0px rgba(0, 0, 0, 0.04),
      0px 40px 32px 0px rgba(0, 0, 0, 0.05),
      0px 100px 80px 0px rgba(0, 0, 0, 0.06),
      0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  }
  &::placeholder {
    font-family: ${({ theme }) => theme.font.regular};
  }
  &:hover::placeholder {
    color: ${({ theme }) => theme.palette.primary};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
