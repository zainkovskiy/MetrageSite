import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../../core/hooks/windowSize';

const Logo = () => {
  const windowSize = useWindowSize();

  return (
    <S.LogoContrainer>
      <Link to='/'>
        {windowSize > 1330 || windowSize <= 1200 ? <S.Logo /> : <S.LogoSmall />}
      </Link>
    </S.LogoContrainer>
  );
};

export default Logo;
