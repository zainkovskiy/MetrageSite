import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/images/arrow.svg';

export const InputWithBoxContainer = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  ${(props) =>
    props.$fullWidth &&
    css`
      width: 100%;
    `}
`;
export const InputWithBox = styled.div`
  border-radius: 2px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.grey};
  padding: 14px 38px 14px 16px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  &:hover > * > * {
    color: ${({ theme }) => theme.palette.primary};
    fill: ${({ theme }) => theme.palette.primary};
  }
`;
export const InputWithBoxTextWrap = styled.div`
  overflow: hidden;
  display: flex;
`;
export const IconArrow = styled(Arrow)`
  width: 14px;
  height: 8px;
  position: absolute;
  right: 13px;
  top: 50%;
  fill: ${({ theme }) => theme.palette.black};
  transform: translate(0, -50%);
`;

export const InputWithBoxText = styled.span`
  font-family: ${({ theme }) => theme.font.dinpro};
  color: ${({ theme }) => theme.palette.black};
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
