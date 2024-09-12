import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/images/icon_cross_primary.svg';

export const ObjectGalary = styled.div`
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const IconClose = styled(Close)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
