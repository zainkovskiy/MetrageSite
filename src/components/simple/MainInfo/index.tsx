import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import InfoCard from '../InfoCard';

const MainInfo = () => {
  return (
    <S.MainInfo>
      <S.MainInfoTextWrap>
        <Text sizeStr='clamp(26px, 4vw, 44px)'>
          Учись и строй карьеру вместе с нами
        </Text>
      </S.MainInfoTextWrap>
      <S.MainInfoCards>
        <InfoCard icon='cross' title='Наставничество и обучение для новичков' />
        <InfoCard
          icon='around'
          title='Регулярные презентации, мастер-классы и тренинги'
        />
        <InfoCard
          icon='arrow'
          title='Профессиональное сообщество с поддержкой по любым вопросам'
        />
        <InfoCard
          icon='semicolon'
          title='Одни из лучших в городе условия оплаты'
        />
      </S.MainInfoCards>
    </S.MainInfo>
  );
};
export default MainInfo;
