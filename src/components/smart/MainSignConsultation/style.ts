import styled from 'styled-components';
import { ReactComponent as LogoBlack } from '../../../assets/images/logoBlack.svg';
export const MainSignConsultation = styled.div`
  padding: 200px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
export const IconLogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: '';
    display: inline-block;
    width: 50%;
    height: 1px;
    vertical-align: super;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.palette.black};
  }
  &:before {
    content: '';
    display: inline-block;
    width: 50%;
    height: 1px;
    vertical-align: super;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.palette.black};
  }
`;
export const IconLogo = styled(LogoBlack)`
  min-width: 27px;
`;
export const MainSignConsultationWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
export const InputsWrap = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  gap: 0.5rem;
`;
export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
`;
export const ButtonTextWrapper = styled.div`
  position: absolute;
  top: 100%;
`;
