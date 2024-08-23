import styled from 'styled-components';
import { ReactComponent as LogoBlack } from '../../../assets/images/logoBlack.svg';
export const MainSignConsultation = styled.div`
  padding: 200px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 768px) {
    padding: 80px 0;
    gap: 2rem;
  }
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
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 2rem;
  }
`;
export const InputsWrap = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export const ButtonTextWrapper = styled.div`
  position: absolute;
  top: 100%;
`;
