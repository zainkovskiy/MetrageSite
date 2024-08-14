import React from 'react';
import * as S from './style';
import { ITabProps } from './types';

const Tab = (props: ITabProps) => {
  const { label, activeKey, isMatch, onChange } = props;
  const handleClick = () => {
    if (onChange) {
      onChange(activeKey);
    }
  };
  return (
    <S.Tab $isMatch={isMatch || false} onClick={handleClick}>
      {label}
    </S.Tab>
  );
};

export default Tab;
