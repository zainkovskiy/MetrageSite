import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PathBurger = styled(motion.path)`
  stroke-width: 1.5;
  stroke: ${({ theme }) => theme.palette.primaryLite};
  stroke-linecap: round;
`;
