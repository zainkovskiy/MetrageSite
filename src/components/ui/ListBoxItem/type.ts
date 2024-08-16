import { ComponentProps } from 'react';
export interface IListBoxItemOwnProps {
  children: string;
}
export type IListBoxItemProps = IListBoxItemOwnProps &
  Omit<ComponentProps<'span'>, keyof IListBoxItemOwnProps>;
