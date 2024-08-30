import React, { ComponentProps } from 'react';

interface ITextDefaultOwnProps {
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
type ITextDefaultProps = ITextDefaultOwnProps &
  Omit<ComponentProps<'span'>, keyof ITextDefaultOwnProps>;

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
