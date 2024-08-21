import React from 'react';
import * as S from './style';
import { IInputProps } from './type';

const Input = (props: IInputProps) => {
  const { type = 'text', fullWidth, small, ...otherProps } = props;
  return (
    <S.InputContainer $fullWidth={fullWidth}>
      <S.Input
        type={type}
        $fullWidth={fullWidth}
        {...otherProps}
        $small={small}
      />
    </S.InputContainer>
  );
};

export default Input;
