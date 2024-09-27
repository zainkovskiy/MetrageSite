import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/images/icon_cross_grey.svg';

export const AboutDiploms = styled.div`
  margin-top: 200px;
  overflow: hidden;
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    margin-top: 120px;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    grid-template-columns: 1fr;
  }
`;
export const AboutDiplomsText = styled.div`
  min-width: 500px;
  background-color: ${({ theme }) => theme.palette.greyLight};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 100%;
  }
`;
export const AboutDiplomsItems = styled.div`
  overflow: auto;
  display: flex;
  gap: 0.5rem;
`;
export const AboutDiplomsItem = styled.img`
  height: 380px;
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
    height: 300px;
  }
  @media (max-width: 768px) {
    height: 230px;
  }
`;
export const WindowDialog = styled.div`
  position: relative;
`;
export const IconClose = styled(Close)<{ $inside?: boolean }>`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(calc(100% + 1rem), 0);
  @media (max-width: 768px) {
    transform: ${({ $inside }) =>
      $inside ? 'translate(-1rem, 1rem)' : 'translate(0, calc(-100% - 1rem))'};
  }
`;
export const ImageFull = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  object-fit: contain;
`;
export const WindowPartners = styled.div`
  background-color: #fff;
  border-radius: 30px 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
    padding: 1rem;
    gap: 1rem;
    max-height: 100vh;
    overflow: auto;
  }
`;
export const WindowPartnersWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 80vw;
`;
export const WindowPartnersItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
