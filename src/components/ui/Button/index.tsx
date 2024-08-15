import React from 'react';
import { IButtonProps } from './types';
import * as S from './style';

const Button = (props: IButtonProps) => {
  const {
    children,
    variant = 'default',
    color = 'primary',
    type = 'button',
    fullWidth,
    small,
    ...otherProps
  } = props;
  const getButtonComponent = () => {
    if (variant === 'outline') {
      return S.ButtonOutline;
    }
    if (variant === 'text') {
      return S.ButtonText;
    }
    return S.Button;
  };
  const ButtonComponent = getButtonComponent();
  return (
    <ButtonComponent
      type={type}
      {...otherProps}
      color={color}
      $fullWidth={fullWidth}
      $small={small}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
