import React from 'react';
import * as S from './style';
import { SelectItemProps } from './types';

const SelectItem = (props: SelectItemProps) => {
  const { value, children, onClick } = props;
  const handleClick = () => {
    if (onClick) {
      onClick(value);
    }
  };

  return <S.SelectItem onClick={handleClick}>{children}</S.SelectItem>;
};

export default SelectItem;
