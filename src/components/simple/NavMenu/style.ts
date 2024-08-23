import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavMenu = styled(motion.div)`
  background-color: #fff;
  width: 100%;
  padding: 4rem 40px;
  box-sizing: border-box;
  overflow: hidden;
  flex-grow: 1;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1215px) {
    padding: 4rem 1rem;
  }
  @media (max-width: 1024px) {
    padding: 2rem 1rem;
  }
`;
export const NavMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const NavMenuLeftSide = styled.div`
  display: flex;
  gap: 4rem;
  overflow: auto;
  flex-grow: 1;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
