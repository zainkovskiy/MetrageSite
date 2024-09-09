import React from 'react';
import * as S from './style';
import { IListBoxItemProps } from './type';

const ListBoxItem = (props: IListBoxItemProps) => {
  const { children, isActive, size, ...otherProps } = props;
  return (
    <S.ListBoxItem $size={size} $isActive={isActive} {...otherProps}>
      {children}
    </S.ListBoxItem>
  );
};

export default ListBoxItem;
