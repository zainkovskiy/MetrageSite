import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Snackbar = styled(motion.div)`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.greenDark};
  z-index: 99999;
`;
