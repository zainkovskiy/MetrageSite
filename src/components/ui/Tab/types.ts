export interface ITabProps {
  label: string;
  activeKey: string;
  isMatch?: boolean;
  onChange?: (value: string) => void;
}
