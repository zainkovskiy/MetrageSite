import { ComponentProps } from 'react';
export interface IListBoxItemOwnProps {
  children: string;
  isActive?: boolean;
  size?: number;
}
export type IListBoxItemProps = IListBoxItemOwnProps &
  Omit<ComponentProps<'span'>, keyof IListBoxItemOwnProps>;
