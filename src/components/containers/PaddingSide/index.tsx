import React from 'react';
import * as S from './style';
const PaddingSide: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <S.PaddingSide>{children}</S.PaddingSide>;
};

export default PaddingSide;
