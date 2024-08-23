import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import InputWithBox from '../../ui/InputWithBox';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';
import HorizontLine from '../../simple/HorizontLine';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
const MainSignConsultation = () => {
  return (
    <S.MainSignConsultation>
      <S.IconLogoContainer>
        <S.IconLogo />
      </S.IconLogoContainer>
      <S.MainSignConsultationWrap>
        <Text size={20}>Записаться на бесплатную консультацию</Text>
        <S.InputsWrap>
          <InputWithBox placeholder='Ваше имя' fullWidth />
          <InputWithBox placeholder='Телефон' fullWidth />
          <S.ButtonWrapper>
            <Button fullWidth disabled>
              отправить
            </Button>
            <S.ButtonTextWrapper>
              <Text size={12} color='greyDark'>
                Нажимая кнопку «Отправить», вы соглашаетесь с
                <ButtonLink
                  size={12}
                  color='greyDark'
                  label='Политикой обработки персональных данных'
                  as={Link}
                  to='/privacy-policy'
                  underline
                />
              </Text>
            </S.ButtonTextWrapper>
          </S.ButtonWrapper>
        </S.InputsWrap>
      </S.MainSignConsultationWrap>
      <HorizontLine />
    </S.MainSignConsultation>
  );
};

export default MainSignConsultation;
