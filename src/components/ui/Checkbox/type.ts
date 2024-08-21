import { ComponentProps } from 'react';

export interface ICheckboxOwnProps {
  label: string;
}
export type ICheckboxProps = ICheckboxOwnProps &
  Omit<ComponentProps<'input'>, keyof ICheckboxOwnProps>;
