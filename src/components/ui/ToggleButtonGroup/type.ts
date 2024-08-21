export interface IToggleButtonGroupProps {
  children: React.ReactNode;
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  value?: string | string[];
}
