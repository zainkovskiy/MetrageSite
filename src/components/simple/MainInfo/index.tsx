import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import MainInfoCard from '../MainInfoCard';

const MainInfo = () => {
  return (
    <S.MainInfo>
      <S.MainInfoTextWrap>
        <Text sizeStr='clamp(26px, 4vw, 44px)'>
          Учись и строй карьеру вместе с нами
        </Text>
      </S.MainInfoTextWrap>
      <S.MainInfoCards>
        <MainInfoCard
          icon='cross'
          text='Наставничество и обучение для новичков'
        />
        <MainInfoCard
          icon='around'
          text='Регулярные презентации, мастер-классы и тренинги'
        />
        <MainInfoCard
          icon='arrow'
          text='Профессиональное сообщество с поддержкой по любым вопросам'
        />
        <MainInfoCard
          icon='semicolon'
          text='Одни из лучших в городе условия оплаты'
        />
      </S.MainInfoCards>
    </S.MainInfo>
  );
};
export default MainInfo;
