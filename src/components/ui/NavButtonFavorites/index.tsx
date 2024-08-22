import React from 'react';
import { ReactComponent as IconFavorites } from '../../../assets/images/heart.svg';
import * as S from './style';
const NavButtonFavorites = () => {
  return (
    <S.NavButtonFavorites to='/favorites'>
      <IconFavorites />
    </S.NavButtonFavorites>
  );
};

export default NavButtonFavorites;
