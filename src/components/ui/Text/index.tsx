import React from 'react';
import { ITextProps } from './types';
import * as S from './style';

const Text = (props: ITextProps) => {
  const { children, bold, size, color } = props;
  return (
    <S.Text $bold={bold} $size={size} $color={color}>
      {children}
    </S.Text>
  );
};

export default Text;
