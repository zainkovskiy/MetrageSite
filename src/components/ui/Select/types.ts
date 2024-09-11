import React from 'react';

export interface InputSelectProps {
  placeholder?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}
