import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      regular: string;
      bold: string;
      gilroy: string;
    };
    palette: {
      primary: string;
      primaryLite: string;
      primaryDark: string;
      text: string;
      error: string;
      grey: string;
      white: string;
    };
  }
}
