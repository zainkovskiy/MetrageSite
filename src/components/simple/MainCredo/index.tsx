import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import LogoWithLine from '../LogoWithLine';
const MainCredo = () => {
  return (
    <S.MainCredo>
      <LogoWithLine />
      <S.MainText>
        <Text size={20}>
          Помогаем решать любые ситуации с недвижимостью. Средний срок закрытия
          сделки — от 7 дней.
        </Text>
      </S.MainText>
    </S.MainCredo>
  );
};

export default MainCredo;
