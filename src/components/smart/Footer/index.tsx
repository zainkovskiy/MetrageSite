import React from 'react';
import * as S from './style';
import HorizontLine from '../../simple/HorizontLine';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import FlexBox from '../../ui/FlexBox';
import Text from '../../ui/Text';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import ButtonLink from '../../ui/ButtonLink';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <CenterContainer>
      <PaddingSide>
        <HorizontLine />
        <S.Footer>
          <S.FooterWrap>
            <FlexBox gap='1rem'>
              <FlexBox gap='1rem' column>
                <ButtonLink as={Link} to='/buy' size={16} label='Купить' />
                <ButtonLink as={Link} to='/sell' size={16} label='Продать' />
                <ButtonLink
                  as={Link}
                  to='/mortgage'
                  size={16}
                  label='Ипотека'
                />
                <ButtonLink
                  as={Link}
                  to='/rieltors'
                  size={16}
                  label='Наши специалисты'
                />
              </FlexBox>
              <FlexBox gap='1rem' column>
                <ButtonLink
                  as={Link}
                  to='/about'
                  size={16}
                  label='О компании'
                />
                <ButtonLink
                  as={Link}
                  to='/contacts'
                  size={16}
                  label='Контакты'
                />
              </FlexBox>
              <FlexBox gap='1rem' column>
                <ButtonLink
                  as={Link}
                  to='/services'
                  size={16}
                  label='Сервисы'
                />
                <ButtonLink as={Link} to='/help' size={16} label='Помощь' />
                <ButtonLink as={Link} to='/journal' size={16} label='Журнал' />
              </FlexBox>
            </FlexBox>
            <FlexBox column gap='1rem'>
              <S.FooterSubscribe>
                <Input placeholder='Эл. почта' fullWidth small />
                <Button fullWidth small disabled>
                  подписаться
                </Button>
              </S.FooterSubscribe>
              <Text size={12} color='greyDark'>
                Продолжая использовать наш сайт, вы даете согласие на обработку
                файлов cookies и других пользовательских данных, в соответствии
                с Правилами обработки персональных данных
              </Text>
            </FlexBox>
            <FlexBox gap='1rem' column aItems='flex-end'>
              <FlexBox column aItems='flex-end'>
                <ButtonLink
                  size={16}
                  color='primaryLite'
                  label='8-800-222-85-28'
                  href='tel:8-800-222-85-28'
                />
                <ButtonLink
                  size={16}
                  color='primaryLite'
                  label='Dunauskas.o@metragegroup.com'
                  href='mailto:Dunauskas.o@metragegroup.com'
                />
              </FlexBox>
              <ButtonLink
                size={16}
                color='primaryLite'
                label='Письмо директору'
              />
            </FlexBox>
          </S.FooterWrap>
          <FlexBox aItems='center' jContent='space-between'>
            <Logo />
            <Text>© ООО «Вдоме», 2022</Text>
          </FlexBox>
        </S.Footer>
      </PaddingSide>
    </CenterContainer>
  );
};

export default Footer;
