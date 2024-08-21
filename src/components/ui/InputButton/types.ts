import React from 'react';

export interface InputButtonProps {
  label: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
