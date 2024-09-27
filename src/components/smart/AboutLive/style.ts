import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/images/icon_cross_white.svg';

export const AboutLive = styled.div`
  margin-top: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 1024px) {
    margin-top: 120px;
  }
  @media (max-width: 768px) {
    gap: 2rem;
    margin-top: 100px;
  }
`;
export const AboutLiveText = styled.div`
  display: grid;
  grid-template-columns: 250px 460px;
  gap: 1rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const AboutLiveItems = styled.div`
  overflow: auto;
  display: flex;
  gap: 0.5rem;
`;
export const AboutLiveItem = styled.img`
  height: 480px;
  cursor: pointer;
  transition: filter 0.3s;
  @media (hover: hover) {
    &:hover {
      filter: drop-shadow(2px 4px 6px #ccc);
    }
    &:active {
      filter: none;
    }
  }
  @media (hover: none) {
    &:active {
      filter: drop-shadow(2px 4px 6px #ccc);
    }
  }
  @media (max-width: 1024px) {
    height: 350px;
  }
  @media (max-width: 768px) {
    height: 230px;
  }
`;
export const WindowDialog = styled.div`
  position: relative;
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
    transform: translate(0, calc(-100% - 1rem));
  }
`;
export const ImageFull = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  object-fit: contain;
`;
