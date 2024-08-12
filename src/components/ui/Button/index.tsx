import React from 'react';
import { IButtonProps } from './types';
import * as S from './style';

const Button = (props: IButtonProps) => {
  const {
    children,
    variant = 'default',
    color = 'primary',
    type = 'button',
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
    <ButtonComponent type={type} {...otherProps}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
