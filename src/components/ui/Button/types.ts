import React, { ComponentProps } from 'react';

interface IButtonOwnProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'text';
  color?: 'primary' | 'black';
  fullWidth?: boolean;
  small?: boolean;
}

export type IButtonProps = IButtonOwnProps &
  Omit<ComponentProps<'button'>, keyof IButtonOwnProps>;

export interface IButtonStyleProps {
  color?: 'primary' | 'black';
  $fullWidth?: boolean;
  $small?: boolean;
}
