import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';

const AboutCheff = () => {
  return (
    <S.AboutCheff>
      <S.AboutCheffImg src='https://metragegroup.com/resources/director.webp' />
      <S.AboutChefText>
        <FlexBox column gap='2rem'>
          <div>
            <Text sizeStr='clamp(26px, 4vw, 44px)'>Для нас</Text>
            <Text sizeStr='clamp(26px, 4vw, 44px)' color='primary'>
              {' '}
              важно
            </Text>
            <Text sizeStr='clamp(26px, 4vw, 44px)'>
              {' '}
              не просто мнение окружающих.
            </Text>
          </div>
          <Text sizeStr='clamp(18px, 3vw, 24px)'>
            Важны доброжелательные отношения с коллегами, партнерами, а главное
            — с клиентами. Ведь за каждой сделкой стоит личная история, и мы
            рады, что помогаем сделать ее счастливой.
          </Text>
        </FlexBox>
        <FlexBox column>
          <Text sizeStr='clamp(18px, 3vw, 24px)'>
            Ольга Владимировна Дунаускас
          </Text>
          <Text size={16}>Генеральный директор Metrage</Text>
        </FlexBox>
      </S.AboutChefText>
    </S.AboutCheff>
  );
};

export default AboutCheff;
