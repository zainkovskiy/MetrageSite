import styled, { css } from 'styled-components';
import { IMainProfitCardStyleProps } from './type';

export const MainProfitCard = styled.div<IMainProfitCardStyleProps>`
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 20px 0;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s;
  width: 25%;
  ${({ $isButton }) =>
    $isButton &&
    css`
      cursor: pointer;
    `}
  & > * {
    pointer-events: none;
  }
  @media (max-width: 1024px) {
    min-width: 320px;
  }
  @media (max-width: 480px) {
    min-width: 270px;
  }
  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
    }
  }
`;
