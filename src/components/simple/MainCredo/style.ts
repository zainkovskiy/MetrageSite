import styled from 'styled-components';
import { ReactComponent as LogoBlack } from '../../../assets/images/logoBlack.svg';
export const MainCredo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 200px 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 48px;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;
export const MainText = styled.div`
  max-width: 640px;
  text-align: center;
`;
