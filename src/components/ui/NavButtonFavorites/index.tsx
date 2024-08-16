import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconFavorites } from '../../../assets/images/heart.svg';

const NavButtonFavorites = () => {
  return (
    <Link to='/favorites'>
      <IconFavorites />
    </Link>
  );
};

export default NavButtonFavorites;
