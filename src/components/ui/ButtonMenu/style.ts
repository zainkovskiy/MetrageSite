import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonMenu = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  gap: 0.5rem;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;
