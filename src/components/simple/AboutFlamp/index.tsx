import React from 'react';
import * as S from './style';
import FlexBox from '../../ui/FlexBox';
import Text from '../../ui/Text';

const AboutFlamp = () => {
  return (
    <S.AboutFlamp>
      <S.AboutFlampReview>
        <S.AboutFlampReviewWrap>
          <Text color='white' sizeStr='clamp(66px, 10vw, 150px)'>
            99%
          </Text>
          <Text color='white' sizeStr='clamp(26px, 4vw, 44px)'>
            положительных отзывов на Flamp
          </Text>
        </S.AboutFlampReviewWrap>
      </S.AboutFlampReview>
      <S.AboutFlampRight>
        <S.AboutFlampText>
          <Text sizeStr='clamp(18px, 3vw, 24px)'>
            В каждом отзыве — своя история. Сотни ситуаций, которые нам удалось
            разрешить в пользу клиента.{' '}
          </Text>
        </S.AboutFlampText>
        <S.AboutFlampIconWrap>
          <S.AboutFlampIconImg src='https://metragegroup.com/resources/flamp-logo.svg' />
        </S.AboutFlampIconWrap>
      </S.AboutFlampRight>
    </S.AboutFlamp>
  );
};

export default AboutFlamp;
