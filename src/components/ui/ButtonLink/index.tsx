import React, { ElementType } from 'react';
import * as S from './style';
import { IButtonLinkProps } from './types';
import { useMatch } from 'react-router-dom';

const defaultTag = 'a';
const ButtonLink = <E extends ElementType = typeof defaultTag>(
  props: IButtonLinkProps<E>
) => {
  const {
    label,
    as,
    uppercase = false,
    bold = false,
    isMatch,
    ...otherProps
  } = props;

  const getIsMatch = () => {
    if (isMatch && props?.to) {
      const match = useMatch(props.to);
      return match ? true : false;
    }
    return false;
  };
  return (
    <S.ButtonLink
      as={as}
      {...otherProps}
      $isMatch={getIsMatch()}
      $uppercase={uppercase}
      $bold={bold}
    >
      {label}
    </S.ButtonLink>
  );
};

export default ButtonLink;
