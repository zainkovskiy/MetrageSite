import { ComponentProps } from 'react';

interface ToggleButtonOwnProps {
  label: string;
  value: string;
}
export type IToggleButtonProps = ToggleButtonOwnProps &
  Omit<ComponentProps<'input'>, keyof ToggleButtonOwnProps>;
