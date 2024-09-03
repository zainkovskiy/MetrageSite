import styled, { css } from 'styled-components';
import { IInputStyleProps } from './type';
import { motion } from 'framer-motion';

export const InputContainer = styled.div<IInputStyleProps>`
  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
  position: relative;
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
export const InputButtonList = styled(motion.div)`
  position: absolute;
  z-index: 99;
  width: max-content;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 21px #0000000d, 0 100px 80px #00000012,
    0 41.7776px 33.4221px #0000000d, 0 22.3363px 17.869px #0000000b,
    0 12.5216px 10.0172px #00000009, 0 6.6501px 5.32008px #00000007,
    0 2.76726px 2.21381px #00000005;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
