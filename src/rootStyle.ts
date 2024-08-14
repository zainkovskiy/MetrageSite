import { createGlobalStyle } from 'styled-components';
import CeraCY_TTF from './assets/font/CeraCYRegular.ttf';
import CeraCY_WOFF from './assets/font/CeraCYRegular.woff';
import CeraCY_WOFF2 from './assets/font/CeraCYRegular.woff2';
import CeraCYBold_TTF from './assets/font/CeraCYBold.ttf';
import CeraCYBold_WOFF from './assets/font/CeraCYBold.woff';
import CeraCYBold_WOFF2 from './assets/font/CeraCYBold.woff2';
import Gilroy_TTF from './assets/font/GilroyRegular.ttf';
import Gilroy_WOFF from './assets/font/GilroyRegular.woff';
import Gilroy_WOFF2 from './assets/font/GilroyRegular.woff2';
import DinPro_TTF from './assets/font/DINPro.ttf';
import DinPro_WOFF from './assets/font/DINPro.woff';
import DinPro_WOFF2 from './assets/font/DINPro.woff2';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  #root{
    position: relative;
  }
  ::-webkit-scrollbar {
    height: 6px;
    width: 5px;
}
  ::-webkit-scrollbar-track-piece {
    background-color: #ebe7e7;
}
  ::-webkit-scrollbar-thumb {
      background-color: #d1d0d0;
      border-radius: 3px;
      height: 80px;
  }
  @font-face {
    font-family: 'CeraCY';
    src: local('CeraCY'), local('CeraCY'),
    url(${CeraCY_TTF}) format('ttf'),
    url(${CeraCY_WOFF2}) format('woff2'),
    url(${CeraCY_WOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'CeraCYBold';
    src: local('CeraCYBold'), local('CeraCYBold'),
    url(${CeraCYBold_TTF}) format('ttf'),
    url(${CeraCYBold_WOFF}) format('woff2'),
    url(${CeraCYBold_WOFF2}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'), local('Gilroy'),
    url(${Gilroy_TTF}) format('ttf'),
    url(${Gilroy_WOFF}) format('woff2'),
    url(${Gilroy_WOFF2}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'DinPro';
    src: local('DinPro'), local('DinPro'),
    url(${DinPro_TTF}) format('ttf'),
    url(${DinPro_WOFF}) format('woff2'),
    url(${DinPro_WOFF2}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;
