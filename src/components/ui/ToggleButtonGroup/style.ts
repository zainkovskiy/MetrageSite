import styled, { css } from 'styled-components';

export const ToggleButtonGroup = styled.div<{ $wrap?: boolean }>`
  display: flex;
  gap: 4px;
  ${({ $wrap }) =>
    $wrap &&
    css`
      flex-wrap: wrap;
    `}
`;
