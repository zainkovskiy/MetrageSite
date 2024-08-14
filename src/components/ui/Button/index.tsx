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
    ...otherProps
  } = props;
  const getButtonComponent = () => {
    if (variant === 'outline') {
      return S.ButtonOutline;
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
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
