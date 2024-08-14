export interface IMainProfitCardProps {
  id?: string;
  label: string;
  linkTitle?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export interface IMainProfitCardStyleProps {
  $isButton: boolean;
}
