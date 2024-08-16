import React from 'react';
import * as S from './style';
import { IListBoxItemProps } from './type';

const ListBoxItem = (props: IListBoxItemProps) => {
  const { children, ...otherProps } = props;
  return <S.ListBoxItem {...otherProps}>{children}</S.ListBoxItem>;
};

export default ListBoxItem;
