import React from 'react';

export interface SelectItemProps {
  value: string;
  onClick?: (value: string) => void;
  children?: string;
}
