export interface IFlexBoxProps {
  gap?: string;
  aItems?: 'center' | 'flex-end' | 'flex-start';
  jContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  children?: React.ReactNode;
}
export interface IFlexBoxPropsStyle {
  $gap?: string;
  $aItems?: string;
  $jContent?: string;
}
