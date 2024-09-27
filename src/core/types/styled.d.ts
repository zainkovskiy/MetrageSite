import 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      regular: string;
      bold: string;
      gilroy: string;
      dinpro: string;
    };
    palette: {
      primary: string;
      primaryLite: string;
      primaryDark: string;
      error: string;
      grey: string;
      greyDark: string;
      greyLight: string;
      black: string;
      white: string;
    };
  }
}
