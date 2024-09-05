import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TooltipUISttyle = styled(motion.div)<{ $flex: boolean }>`
  position: relative;
  ${({ $flex }) => $flex && 'display: flex;'};
`;
export const TooltipTitleStyle = styled(motion.div)<{ $maxWidth: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background-color: #bc3fd4cc;
  padding: 0 0.4rem;
  border-radius: 5px;
  text-transform: lowercase;
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.regular};
  z-index: 99;
  user-select: none;
  pointer-events: none;
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}px;`};
  ${({ $maxWidth }) => `white-space: ${$maxWidth ? 'wrap' : 'nowrap'};`};
`;
