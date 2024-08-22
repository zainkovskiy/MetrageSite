import React from 'react';
import * as S from './style';
import Text from '../Text';
import ButtonMenuBurger from '../ButtonMenuBurger';
import { IButtonMenu } from './type';
import { useWindowSize } from '../../../core/hooks/windowSize';
import ButtonMenuBurgerMobile from '../ButtonMenuBurgerMobile';
const ButtonMenu = ({ onClick, open }: IButtonMenu) => {
  const windowSize = useWindowSize();
  return (
    <S.ButtonMenu
      onClick={onClick}
      animate={open ? 'open' : 'closed'}
      data-nav='nav'
    >
      {windowSize >= 1200 ? <ButtonMenuBurger /> : <ButtonMenuBurgerMobile />}
      {windowSize >= 1200 && <Text color='primaryLite'>МЕНЮ</Text>}
    </S.ButtonMenu>
  );
};

export default ButtonMenu;
