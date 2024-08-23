import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Nav = styled(motion.div)<{ $fullHeight: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 999;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.$fullHeight &&
    css`
      bottom: 0;
    `}
`;
export const NavWrapper = styled.div`
  padding: 26px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1215px) {
    padding: 26px 1rem;
  }
`;
