import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/images/icon_cross.svg';
export const WindowLocationMenuWrap = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
`;
export const WindowLocationMenu = styled.div`
  background-color: #fff;
  width: 100%;
  height: 35vh;
  border-radius: 0.75rem 0.75rem 0 0;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  & > * {
    pointer-events: none;
  }
`;
