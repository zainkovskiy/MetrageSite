import styled, { css } from 'styled-components';
import { ReactComponent as Around } from '../../../assets/images/mainAround.svg';
import { ReactComponent as Cross } from '../../../assets/images/mainCross.svg';
import { ReactComponent as Arrow } from '../../../assets/images/mainArrow.svg';
import { ReactComponent as Semicon } from '../../../assets/images/semicolon.svg';

export const InfoCard = styled.div`
  padding: 32px 24px;
  box-sizing: border-box;
  border-radius: 0 20px;
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.1);
  height: 13rem;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
  }
`;
export const InfoCardTextWrap = styled.div`
  max-width: 285px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const iconCss = css`
  position: absolute;
  z-index: -1;
`;
export const IconAround = styled(Around)`
  ${iconCss}
  top: 2rem;
  right: -1rem;
`;
export const IconCross = styled(Cross)`
  ${iconCss}
  top: 0;
  right: 0;
`;
export const IconArrow = styled(Arrow)`
  ${iconCss}
  top: 3rem;
  right: 1rem;
`;
export const IconSemicon = styled(Semicon)`
  ${iconCss}
  top: 0;
  right: 2rem;
`;
