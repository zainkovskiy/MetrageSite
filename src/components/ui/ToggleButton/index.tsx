import React from 'react';
import * as S from './style';
import { IToggleButtonProps } from './type';

const ToggleButton = (props: IToggleButtonProps) => {
  const { label, ...otherProps } = props;
  return (
    <S.ToggleButton>
      {label}
      <S.ToggleButtonInput type='checkbox' {...otherProps} />
    </S.ToggleButton>
  );
};

export default ToggleButton;
