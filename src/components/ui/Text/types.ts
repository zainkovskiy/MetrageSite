import React from 'react';

interface ITextDefaultProps {
  children: React.ReactNode;
  bold?: boolean;
  color?:
    | 'primary'
    | 'primaryLite'
    | 'primaryDark'
    | 'grey'
    | 'greyDark'
    | 'black'
    | 'white';
}

type ITextSizeNumberProps = ITextDefaultProps & {
  size?: number;
  sizeStr?: never;
};
type ITextSizeStringProps = ITextDefaultProps & {
  size?: never;
  sizeStr?: string;
};

export type ITextProps = ITextSizeNumberProps | ITextSizeStringProps;

export interface ITextStyleProps {
  $bold?: boolean;
  $size?: number;
  $sizeStr?: string;
  $color?:
    | 'primary'
    | 'primaryLite'
    | 'primaryDark'
    | 'grey'
    | 'greyDark'
    | 'black'
    | 'white';
}
