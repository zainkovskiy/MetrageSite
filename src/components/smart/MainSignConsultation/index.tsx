import React from 'react';
import * as S from './style';
import HorizontLine from '../../simple/HorizontLine';
import LogoWithLine from '../../simple/LogoWithLine';
import FormNamePhone from '../FormNamePhone';
const MainSignConsultation = () => {
  return (
    <S.MainSignConsultation>
      <LogoWithLine fullFill />
      <FormNamePhone text='Записаться на бесплатную консультацию' />
      <HorizontLine />
    </S.MainSignConsultation>
  );
};

export default MainSignConsultation;
