import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import InputWithBox from '../../ui/InputWithBox';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';
import HorizontLine from '../../simple/HorizontLine';
const MainSignConsultation = () => {
  return (
    <S.MainSignConsultation>
      <S.IconLogoContainer>
        <S.IconLogo />
      </S.IconLogoContainer>
      <FlexBox aItems='center' gap='0.5rem'>
        <Text size={20}>Записаться на бесплатную консультацию</Text>
        <FlexBox gap='0.5rem' fullWidth>
          <InputWithBox placeholder='Ваше имя' fullWidth />
          <InputWithBox placeholder='Телефон' fullWidth />
          <S.ButtonWrapper>
            <Button fullWidth>отправить</Button>
            <S.ButtonTextWrapper>
              <Text size={12} color='greyDark'>
                Нажимая кнопку «Отправить», вы соглашаетесь с Политикой
                обработки персональных данных
              </Text>
            </S.ButtonTextWrapper>
          </S.ButtonWrapper>
        </FlexBox>
      </FlexBox>
      <HorizontLine />
    </S.MainSignConsultation>
  );
};

export default MainSignConsultation;
