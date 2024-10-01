import React from 'react';
import * as S from './style';
import { AnimatePresence } from 'framer-motion';
import FlexBox from '../../ui/FlexBox';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../../core/hooks/windowSize';
import { desktopAnimate, mobileAnimate } from './animate';
import { useAppDispatch } from '../../../core/hooks/storeHook';
import { openLetterCheff } from '../../../core/store/slices/MainInfoSlice';

const NavMenu = ({ open, ...otherProps }: { open: boolean }) => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();
  const handleClickLetter = () => {
    dispatch(openLetterCheff());
  };
  return (
    <AnimatePresence>
      {open && (
        <S.NavMenu
          {...otherProps}
          initial='close'
          animate={open ? 'open' : 'close'}
          exit='close'
          variants={windowSize > 1024 ? desktopAnimate : mobileAnimate}
          transition={{ duration: 0.3 }}
        >
          <S.NavMenuWrap>
            <S.NavMenuLeftSide>
              <FlexBox column gap='1rem'>
                <Text bold>Для клиентов</Text>
                <FlexBox column gap='0.5rem'>
                  {/* <ButtonLink as={Link} to='/sell' label='Продать' /> */}
                  <ButtonLink as={Link} to='/buy' label='Купить' />
                  <ButtonLink
                    as={Link}
                    to='/newbuildings'
                    label='Новостройки'
                  />
                  {/* <ButtonLink as={Link} to='/mortgage' label='Ипотека' /> */}
                  {/* <ButtonLink as={Link} to='/help' label='Помощь' /> */}
                  <ButtonLink as={Link} to='/articles/' label='Статьи' />
                </FlexBox>
              </FlexBox>
              <FlexBox column gap='1rem'>
                <Text bold>О нас</Text>
                <FlexBox column gap='0.5rem'>
                  <ButtonLink as={Link} to='/about' label='О компании' />
                  <ButtonLink
                    as={Link}
                    to='/rieltors'
                    label='Наши специалисты'
                  />
                  {/* <ButtonLink as={Link} to='/journal' label='Журнал' /> */}
                  <ButtonLink as={Link} to='/contacts' label='Контакты' />
                </FlexBox>
              </FlexBox>
              <FlexBox column gap='1rem'>
                <Text>Передать клиента</Text>
                <FlexBox column gap='0.5rem'>
                  <ButtonLink
                    href='https://crm.metragegroup.com/'
                    label='Оставить заявку'
                  />
                </FlexBox>
              </FlexBox>
              {/* <FlexBox column gap='1rem'>
                <Text bold>Сервисы</Text>
                <FlexBox column gap='0.5rem'>
                  <ButtonLink as={Link} to='/services/1' label='Страхование' />
                  <ButtonLink as={Link} to='/services/3' label='Переезд' />
                  <ButtonLink as={Link} to='/mortgage' label='Ипотека' />
                  <ButtonLink
                    as={Link}
                    to='/services/4'
                    label='Продажа квартиры'
                  />
                  <ButtonLink
                    as={Link}
                    to='/services/5'
                    label='Оценка недвижимости'
                  />
                  <ButtonLink
                    as={Link}
                    to='/services/6'
                    label='Управление капиталом'
                  />
                  <ButtonLink as={Link} to='/services/7' label='Франшиза' />
                </FlexBox>
              </FlexBox> */}
            </S.NavMenuLeftSide>
            <FlexBox column gap='0.5rem' aItems='flex-end'>
              <ButtonLink
                color='primaryLite'
                label='8-800-222-85-28'
                href='tel:8-800-222-85-28'
                isNumber
              />
              <ButtonLink
                color='primaryLite'
                label='Dunauskas.o@metragegroup.com'
                href='mailto:Dunauskas.o@metragegroup.com'
              />
              <ButtonLink
                color='primaryLite'
                label='Письмо директору'
                onClick={handleClickLetter}
              />
            </FlexBox>
          </S.NavMenuWrap>
        </S.NavMenu>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
