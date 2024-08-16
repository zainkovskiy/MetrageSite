import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/images/arrow_small.svg';
export const ListBox = styled.div<{ $isHover: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  font-size: 14px;
  transition: color 0.3s;
  cursor: pointer;
  & > svg {
    pointer-events: none;
  }
  &:hover > #icon > * {
    stroke: ${({ theme }) => theme.palette.primary};
  }
  ${(props) =>
    props.$isHover &&
    css`
      @media (hover: hover) {
        &:hover {
          color: ${({ theme }) => theme.palette.primary};
        }
      }
    `}
`;
export const IconArrow = styled(Arrow)<{ $isActive: boolean }>`
  transition: transform 0.3s;
  ${(props) =>
    props.$isActive &&
    css`
      transform: rotate(180deg);
    `}
`;
export const ListBoxContainer = styled.div`
  position: absolute;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  top: calc(100% + 0.5rem);
  right: 0;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
