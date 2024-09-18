export interface IToggleButtonGroupProps {
  children: React.ReactNode;
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  wrap?: boolean;
  value?: string | string[];
}
