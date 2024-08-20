import { ComponentElement, ComponentProps } from 'react';

export interface IFlexOwnBoxProps {
  gap?: string;
  fullWidth?: boolean;
  column?: boolean;
  aItems?: 'center' | 'flex-end' | 'flex-start';
  jContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  children?: React.ReactNode;
}
export type IFlexBoxProps = IFlexOwnBoxProps &
  Omit<ComponentProps<'div'>, keyof IFlexOwnBoxProps>;

export interface IFlexBoxPropsStyle {
  $gap?: string;
  $aItems?: string;
  $jContent?: string;
  $fullWidth?: boolean;
  $column?: boolean;
}
