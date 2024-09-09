import React from 'react';

type IListBoxDefaultProps = {
  title: string;
  size?: number;
  padding?: string;
  children?: React.ReactNode;
  iconEnd?: React.ReactNode;
  iconStart?: React.ReactNode;
  arrow?: boolean;
  isHover?: boolean;
  open?: boolean;
  hightlight?: string;
  onClick?: () => void;
};
type IListBoxPropsIcon = IListBoxDefaultProps & {
  iconEnd?: React.ReactElement<'svg'>;
  arrow?: never;
};
type IListBoxPropsArrow = IListBoxDefaultProps & {
  arrow?: boolean;
  iconEnd?: never;
};

export type IListBoxProps = IListBoxPropsIcon | IListBoxPropsArrow;
