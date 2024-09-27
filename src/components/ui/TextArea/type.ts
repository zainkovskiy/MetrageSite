import React, { ComponentProps } from 'react';

interface ITextAreaOwnProps {}

export type ITextAreaProps = ITextAreaOwnProps &
  Omit<ComponentProps<'textarea'>, keyof ITextAreaOwnProps>;

export interface ITextAreaStyleProps {}

export type TextAreaRef = HTMLTextAreaElement;
