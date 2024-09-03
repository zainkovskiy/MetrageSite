import React, { ComponentProps } from 'react';

interface IInputOwnProps {
  fullWidth?: boolean;
  small?: boolean;
  type?: never;
  onChange?: (value: string) => void;
  list?: React.ReactNode;
}

export type IInputProps = IInputOwnProps &
  Omit<ComponentProps<'input'>, keyof IInputOwnProps>;

export interface IInputStyleProps {
  $fullWidth?: boolean;
  $small?: boolean;
}
