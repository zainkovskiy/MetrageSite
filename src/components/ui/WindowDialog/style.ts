import { motion } from 'framer-motion';
import styled from 'styled-components';

export const WindowDialog = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #ffffffc7;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
