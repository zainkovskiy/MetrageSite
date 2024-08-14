import React from 'react';

export interface ITextProps {
  children: React.ReactNode;
  bold?: boolean;
  size?: number;
  color?:
    | 'primary'
    | 'primaryLite'
    | 'primaryDark'
    | 'grey'
    | 'greyDark'
    | 'black'
    | 'white';
}
export interface ITextStyleProps {
  $bold?: boolean;
  $size?: number;
  $color?:
    | 'primary'
    | 'primaryLite'
    | 'primaryDark'
    | 'grey'
    | 'greyDark'
    | 'black'
    | 'white';
}
