import React, { ElementType, ComponentProps } from 'react';
import { Link } from 'react-router-dom';

type AllowedElements = 'a' | typeof Link;
type IsAllowedElement<T> = T extends ElementType<AllowedElements>
  ? T
  : 'a' | typeof Link;

interface IButtonLinkOwnProps<E extends ElementType = ElementType> {
  label?: string;
  as?: IsAllowedElement<E>;
  isMatch?: boolean;
  uppercase?: boolean;
  bold?: boolean;
}

export type IButtonLinkProps<E extends ElementType> = IButtonLinkOwnProps<E> &
  Omit<ComponentProps<E>, keyof IButtonLinkOwnProps<E>>;

export interface IButtonLinkStyleProps {
  $isMatch: boolean;
  $uppercase: boolean;
  $bold: boolean;
}
