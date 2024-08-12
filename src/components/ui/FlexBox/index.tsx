import React from 'react';
import * as S from './style';
import { IFlexBoxProps } from './types';

const FlexBox: React.FC<IFlexBoxProps> = ({
  children,
  jContent,
  aItems,
  gap,
}) => {
  return (
    <S.FlexBox $gap={gap} $aItems={aItems} $jContent={jContent}>
      {children}
    </S.FlexBox>
  );
};

export default FlexBox;
