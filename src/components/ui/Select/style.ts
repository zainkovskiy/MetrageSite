import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg';
import { motion } from 'framer-motion';

export const InputSelectContainer = styled(motion.div)`
  position: relative;
`;
export const InputSelect = styled(motion.div)`
  border-radius: 2px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.grey};
  padding: 13px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  & > * {
    pointer-events: none;
  }
  &:hover > * > * {
    color: ${({ theme }) => theme.palette.primary};
    fill: ${({ theme }) => theme.palette.primary};
  }
`;
export const IconArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.palette.black};
  min-width: 14px;
`;
export const InputSelectList = styled(motion.div)`
  position: absolute;
  z-index: 999;
  width: max-content;
  top: calc(100% + 0.5rem);
  left: 0;
  padding: 2rem 1rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 21px #0000000d, 0 100px 80px #00000012,
    0 41.7776px 33.4221px #0000000d, 0 22.3363px 17.869px #0000000b,
    0 12.5216px 10.0172px #00000009, 0 6.6501px 5.32008px #00000007,
    0 2.76726px 2.21381px #00000005;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const InputSelectText = styled.input`
  border: none;
  width: 100%;
  text-overflow: ellipsis;
  outline: none;
  font-family: ${({ theme }) => theme.font.dinpro};
  color: ${({ theme }) => theme.palette.black};
  font-size: 16px;
  pointer-events: none;
`;
