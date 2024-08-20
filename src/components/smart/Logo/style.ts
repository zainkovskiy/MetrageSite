import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../../assets/images/logo.svg';
import { ReactComponent as LogoSmallIcon } from '../../../assets/images/logo_small.svg';
export const LogoContrainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Logo = LogoIcon;
export const LogoSmall = LogoSmallIcon;
