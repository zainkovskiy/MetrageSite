import React from 'react';
import * as S from './style';
import Text from '../Text';

const ButtonLocationMobile = () => {
  return (
    <S.ButtonLocationMobile>
      <S.ButtonLocationPin />
      <Text>Novosibirsk</Text>
    </S.ButtonLocationMobile>
  );
};

export default ButtonLocationMobile;
