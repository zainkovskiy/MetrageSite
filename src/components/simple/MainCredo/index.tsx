import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
const MainCredo = () => {
  return (
    <S.MainCredo>
      <S.IconLogoContainer>
        <S.IconLogo />
      </S.IconLogoContainer>
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
