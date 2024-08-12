import styled, { css } from 'styled-components';
import { IFlexBoxPropsStyle } from './types';

export const FlexBox = styled.div<IFlexBoxPropsStyle>`
  display: flex;
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap};
    `}
  ${(props) =>
    props.$aItems &&
    css`
      align-items: ${props.$aItems};
    `}
  ${(props) =>
    props.$jContent &&
    css`
      justify-content: ${props.$jContent};
    `}
`;
