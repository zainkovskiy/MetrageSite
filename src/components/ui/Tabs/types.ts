import { ITabProps } from '../Tab/types';

export interface ITabsProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactElement<ITabProps> | React.ReactElement<ITabProps>[];
}
