import React from 'react';
import * as S from './style';
const HorizontLine = ({ color }: { color?: string }) => {
  return <S.HorizontLine $color={color} />;
};

export default HorizontLine;
