import React from 'react';
import { ITextProps } from './types';
import * as S from './style';

const Text = (props: ITextProps) => {
  const { children, bold, size, color, sizeStr, nowrap, ...otherProps } = props;
  return (
    <S.Text
      $bold={bold}
      $size={size}
      $color={color}
      $nowrap={nowrap}
      $sizeStr={sizeStr}
      {...otherProps}
    >
      {children}
    </S.Text>
  );
};

export default Text;
