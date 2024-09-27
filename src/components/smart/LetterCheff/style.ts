import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/images/icon_cross_grey.svg';

export const LetterCheff = styled.form`
  background-color: #fff;
  border-radius: 30px 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 80vw;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    overflow: auto;
    border-radius: 0;
    box-shadow: none;
  }
`;
export const LetterCheffInputsWrap = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IconClose = styled(Close)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(calc(100% + 1rem), 0);
  @media (max-width: 768px) {
    transform: translate(-1rem, 1rem);
  }
`;
export const LetterCheffButtonWrap = styled.div`
  padding-right: 0.5rem;
  width: 50%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
  @media (max-width: 480px) {
  }
`;
