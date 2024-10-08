import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { ReactComponent as ArrowBoldLeft } from '../../../assets/images/arrowBoldLeft.svg';
import { ReactComponent as Close } from '../../../assets/images/icon_cross_primary.svg';

export const AccordeonNewBuildings = styled(motion.div)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.greyDark};
  overflow: hidden;
`;
export const AccordeonNewBuildingsHeader = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  padding: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.palette.grey : '#fff'};
  ${({ $isOpen, theme }) =>
    $isOpen &&
    css`
      border-bottom: 1px solid ${theme.palette.greyDark};
    `};
  transition: background-color 0.3s;
  & > :last-child {
    justify-self: flex-end;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.grey};
    }
    &:active {
      background-color: #fff;
    }
  }
  @media (hover: none) {
    &:active {
      background-color: ${({ theme }) => theme.palette.grey};
    }
  }
  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    background-color: #fff;
    grid-template-columns: 1fr 1fr min-content;
    column-gap: 0.5rem;
    & > :last-child {
      justify-self: normal;
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
`;
export const BackWrap = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`;
export const Arrow = styled(ArrowBoldLeft)`
  transform: rotate(-90deg);
`;
export const ArrowAmimate = styled(motion.div)``;
export const AccordeonNewBuildingsContext = styled(motion.div)`
  background-color: ${({ theme }) => theme.palette.grey};
  max-height: 450px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    background-color: #fff;
    position: fixed;
    top: 76px;
    left: 0;
    right: 0;
    bottom: 0;
    max-height: 100%;
    z-index: 9999;
  }
`;
export const AccordeonNewBuildingsContextItems = styled.div`
  overflow: auto;
`;
export const AccordeonNewBuildingsContextItemWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.greyDark};
  padding: 1rem;
  box-sizing: border-box;
  &:last-child {
    border-bottom: none;
  }
`;
export const AccordeonNewBuildingsContextItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 2fr;
    column-gap: 1rem;
    & > :first-child {
      grid-row-start: 1;
      grid-row-end: 4;
    }
  }
`;
export const AccordeonNewBuildingsImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
`;
export const AccordeonNewBuildingsFullImg = styled.img`
  height: 80vh;
  width: 80vw;
  object-fit: contain;
`;
export const IconClose = styled(Close)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const ArrowButton = styled.div`
  cursor: pointer;
  & > {
    pointer-events: none;
  }
`;
