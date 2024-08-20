import React from 'react';
import * as S from './style';
import Text from '../Text';
import ButtonMenuBurger from '../ButtonMenuBurger';
import { IButtonMenu } from './type';
const ButtonMenu = ({ onClick, open }: IButtonMenu) => {
  return (
    <S.ButtonMenu
      onClick={onClick}
      animate={open ? 'open' : 'closed'}
      data-nav='nav'
    >
      <ButtonMenuBurger />
      <Text color='primaryLite'>МЕНЮ</Text>
    </S.ButtonMenu>
  );
};

export default ButtonMenu;
