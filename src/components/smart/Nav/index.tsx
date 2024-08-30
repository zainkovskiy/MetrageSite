import React, { useEffect, useRef, useState } from 'react';
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
import { fetchData, setRegion } from '../../../core/store/slices/MainInfoSlice';
import { regionRus } from '../../../core/constants/regions';
import ButtonMenu from '../../ui/ButtonMenu';
import NavMenu from '../../simple/NavMenu';
import Logo from '../Logo';
import { useWindowSize } from '../../../core/hooks/windowSize';
import ButtonLocationMobile from '../../ui/ButtonLocationMobile';
import WindowLocationMenu from '../WindowLocationMenu';

const Nav = () => {
  const firstMount = useRef(true);
  const dispatch = useAppDispatch();
  const { region } = useAppSelector((state) => state.main);
  const [isVisibleBack, setIsVisibleBack] = useState(false);
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  useEffect(() => {
    if (openMenu) {
      document.addEventListener('click', handleListener, true);
    } else {
      document.removeEventListener('click', handleListener, true);
    }
    return () => {
      document.removeEventListener('click', handleListener, true);
    };
  }, [openMenu]);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    dispatch(fetchData(region));
  }, [region]);
  scroll(
    (progress) => {
      if (progress > 0) {
        setIsVisibleBack(true);
        return;
      }
      if (openMenu) {
        setIsVisibleBack(true);
        return;
      }
      setIsVisibleBack(false);
    },
    { axis: 'y' }
  );
  const handleListener = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const className = target.className;

    if (!className) {
      setOpenMenu(false);
    }
    if (navRef.current) {
      const elemColection = navRef.current.getElementsByClassName(
        `${className}`
      );
      if (elemColection.length > 0) {
        return;
      }
      setOpenMenu(false);
    }
    setOpenMenu(false);
  };
  const _active = () => {
    setActive(!active);
  };
  const setNewRegion = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    dispatch(setRegion(target.id));
  };
  const _openMenu = () => {
    setOpenMenu(!openMenu);
  };
  const _openMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <S.Nav
      animate={isVisibleBack ? 'visible' : 'invisible'}
      variants={navVariants}
      transition={{ duration: 0.3 }}
      ref={navRef}
      $fullHeight={windowSize < 1024 && openMenu}
    >
      <CenterContainer>
        <S.NavWrapper>
          {windowSize >= 1200 && (
            <FlexBox gap='20px' aItems='center'>
              <ButtonMenu onClick={_openMenu} open={openMenu} />
              <ButtonLink
                label='Купить'
                as={Link}
                to='/buy'
                isMatch
                uppercase
              />
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
          )}
          {windowSize < 1200 && (
            <ButtonLocationMobile onClick={_openMobileMenu} />
          )}
          <Logo />
          <FlexBox gap='20px' aItems='center'>
            {windowSize >= 1200 && (
              <>
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
                  isNumber
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
              </>
            )}
            {/* <NavButtonFavorites /> */}
            {windowSize < 1200 && (
              <ButtonMenu onClick={_openMenu} open={openMenu} />
            )}
          </FlexBox>
        </S.NavWrapper>
      </CenterContainer>
      <NavMenu open={openMenu} />
      {openMobileMenu && <WindowLocationMenu onClick={_openMobileMenu} />}
    </S.Nav>
  );
};
export default Nav;
