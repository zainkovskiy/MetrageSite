import styled, { css } from 'styled-components';
import { ReactComponent as LogoBlack } from '../../../assets/images/logoBlack.svg';

export const IconLogoContainer = styled.div<{ $fullFill: boolean }>`
  ${({ $fullFill }) =>
    $fullFill &&
    css`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  &:after {
    content: '';
    display: inline-block;
    width: ${({ $fullFill }) => ($fullFill ? '50%' : '67px')};
    height: 1px;
    vertical-align: super;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.palette.black};
  }
  &:before {
    content: '';
    display: inline-block;
    width: ${({ $fullFill }) => ($fullFill ? '50%' : '67px')};
    height: 1px;
    vertical-align: super;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.palette.black};
  }
`;
export const IconLogo = styled(LogoBlack)`
  min-width: 27px;
`;
