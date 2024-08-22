import styled from 'styled-components';
import { ReactComponent as Pin } from '../../../assets/images/pin24.svg';

export const ButtonLocationMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  & > * {
    pointer-events: none;
    transition: color 0.3s;
  }
  @media (hover: hover) {
    &:hover > * {
      color: ${({ theme }) => theme.palette.primaryLite};
      stroke: ${({ theme }) => theme.palette.primaryLite};
    }
  }
`;
export const ButtonLocationPin = styled(Pin)`
  width: 24px;
  height: 24px;
`;
