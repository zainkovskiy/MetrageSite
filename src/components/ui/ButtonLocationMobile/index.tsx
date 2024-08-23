import React from 'react';
import * as S from './style';
import Text from '../Text';
import { useWindowSize } from '../../../core/hooks/windowSize';
import { useAppSelector } from '../../../core/hooks/storeHook';
import { regionRus } from '../../../core/constants/regions';

const ButtonLocationMobile = () => {
  const { region } = useAppSelector((state) => state.main);
  const windowSize = useWindowSize();
  return (
    <S.ButtonLocationMobile>
      <S.ButtonLocationPin />
      {windowSize > 480 && <Text>{regionRus[region]}</Text>}
    </S.ButtonLocationMobile>
  );
};

export default ButtonLocationMobile;
