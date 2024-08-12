import React from 'react';
import * as S from './style';
const CenterContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <S.CenterContainer>{children}</S.CenterContainer>;
};

export default CenterContainer;
