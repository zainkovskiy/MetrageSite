import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IPathBurgerStyleProp } from './type';

export const PathBurger = styled(motion.path)<IPathBurgerStyleProp>`
  stroke-width: 1.5;
  stroke: ${({ theme, $color }) =>
    $color ? theme.palette[$color] : theme.palette.primaryLite};
  stroke-linecap: round;
`;
