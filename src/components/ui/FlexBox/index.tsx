import React from 'react';
import * as S from './style';
import { IFlexBoxProps } from './types';

const FlexBox: React.FC<IFlexBoxProps> = ({
  children,
  jContent,
  aItems,
  gap,
  wrap,
  column,
  fullWidth,
  ...otherProps
}) => {
  return (
    <S.FlexBox
      $gap={gap}
      $wrap={wrap}
      $aItems={aItems}
      $jContent={jContent}
      $fullWidth={fullWidth}
      $column={column}
      {...otherProps}
    >
      {children}
    </S.FlexBox>
  );
};

export default FlexBox;
