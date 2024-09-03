import React from 'react';
import * as S from './style';

const LogoWithLine = ({ fullFill = false }: { fullFill?: boolean }) => {
  return (
    <S.IconLogoContainer $fullFill={fullFill}>
      <S.IconLogo />
    </S.IconLogoContainer>
  );
};

export default LogoWithLine;
