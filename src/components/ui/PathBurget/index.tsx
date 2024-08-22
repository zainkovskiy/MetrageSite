import React from 'react';
import * as S from './styled';
import { IPathBurgerProps } from './type';

const PathBurger = (props: IPathBurgerProps) => {
  const { color, ...otherProps } = props;
  return <S.PathBurger $color={color} {...otherProps} d='M 0 0 L 0 0' />;
};
export default PathBurger;
