import React, { ComponentProps } from 'react';

interface IButtonOwnProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  color?: 'primary' | 'grey';
}

export type IButtonProps = IButtonOwnProps &
  Omit<ComponentProps<'button'>, keyof IButtonOwnProps>;
