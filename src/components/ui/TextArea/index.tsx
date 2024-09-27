import React, { forwardRef } from 'react';
import * as S from './style';
import { ITextAreaProps, TextAreaRef } from './type';

const TextArea = forwardRef<TextAreaRef, ITextAreaProps>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <S.TextAreaContainer>
      <S.TextArea ref={ref} {...otherProps} />
    </S.TextAreaContainer>
  );
});

export default TextArea;
