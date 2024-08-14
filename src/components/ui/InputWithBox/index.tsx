import React from 'react';
import * as S from './style';
import { IInputWithBoxProps } from './types';
const InputWithBox = (props: IInputWithBoxProps) => {
  const { placeholder, fullWidth } = props;
  return (
    <S.InputWithBoxContainer $fullWidth={fullWidth}>
      <S.InputWithBox>
        <S.InputWithBoxTextWrap>
          <S.InputWithBoxText>{placeholder}</S.InputWithBoxText>
        </S.InputWithBoxTextWrap>
        <S.IconArrow />
      </S.InputWithBox>
    </S.InputWithBoxContainer>
  );
};

export default InputWithBox;
