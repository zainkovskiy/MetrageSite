import React from 'react';
import { ITextProps } from './types';
import * as S from './style';

const Text = (props: ITextProps) => {
  const { children, bold, size, color, sizeStr, ...otherProps } = props;
  return (
    <S.Text
      $bold={bold}
      $size={size}
      $color={color}
      $sizeStr={sizeStr}
      {...otherProps}
    >
      {children}
    </S.Text>
  );
};

export default Text;
