import React, { useState } from 'react';
import * as S from './style';
import { scroll } from 'framer-motion';
import { navVariants } from './animate';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import FlexBox from '../../ui/FlexBox';
import CenterContainer from '../../containers/CenterContainer';
import NavButtonFavorites from '../../ui/NavButtonFavorites';
import ListBox from '../../ui/ListBox';
import { ReactComponent as Pin } from '../../../assets/images/Icon_pin.svg';
import ListBoxItem from '../../ui/ListBoxItem';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import { setRegion } from '../../../core/store/slices/MainInfoSlice';
import { regionRus } from '../../../core/constants/regions';

const Nav = () => {
  const dispatch = useAppDispatch();
  const { region } = useAppSelector((state) => state.main);
  const [isVisibleBack, setIsVisibleBack] = useState(false);
  const [active, setActive] = useState(false);
  scroll(
    (progress) => {
      if (progress > 0) {
        setIsVisibleBack(true);
        return;
      }
      setIsVisibleBack(false);
    },
    { axis: 'y' }
  );
  const _active = () => {
    setActive(!active);
  };
  const setNewRegion = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    dispatch(setRegion(target.id));
  };
  return (
    <S.Nav
      animate={isVisibleBack ? 'visible' : 'invisible'}
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <CenterContainer>
        <S.NavWrapper>
          <FlexBox gap='20px'>
            <ButtonLink label='Купить' as={Link} to='/buy' isMatch uppercase />
            <ButtonLink
              label='Продать'
              as={Link}
              to='/sell'
              isMatch
              uppercase
            />
            <ButtonLink
              label='Ипотека'
              as={Link}
              to='/mortgage'
              isMatch
              uppercase
            />
          </FlexBox>
          <FlexBox gap='20px'>
            <ButtonLink
              label='Сервисы'
              as={Link}
              to='/services'
              isMatch
              uppercase
            />
            <ButtonLink
              label='Передать клиента'
              uppercase
              href='https://crm.metragegroup.com/'
            />
            <ButtonLink
              label='8-800-222-85-28'
              uppercase
              href='tel:8-800-222-85-28'
            />
            <ListBox
              title={regionRus[region]}
              iconStart={<Pin />}
              arrow
              isHover
              open={active}
              onClick={_active}
            >
              <ListBoxItem id='msk' onClick={setNewRegion}>
                Москва
              </ListBoxItem>
              <ListBoxItem id='nsk' onClick={setNewRegion}>
                Новосибирск
              </ListBoxItem>
            </ListBox>
            <NavButtonFavorites />
          </FlexBox>
        </S.NavWrapper>
      </CenterContainer>
    </S.Nav>
  );
};
export default Nav;
