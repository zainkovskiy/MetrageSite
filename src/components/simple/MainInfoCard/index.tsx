import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import { IMainInfoCards } from './type';
const MainInfoCard = (props: IMainInfoCards) => {
  const { text, icon } = props;
  const getIcon = () => {
    switch (icon) {
      case 'around':
        return <S.IconAround />;
      case 'arrow':
        return <S.IconArrow />;
      case 'cross':
        return <S.IconCross />;
      case 'semicolon':
        return <S.IconSemicon />;
    }
  };
  return (
    <S.MainInfoCard>
      <S.MainInfoCardTextWrap>
        <Text size={24}>{text}</Text>
      </S.MainInfoCardTextWrap>
      {icon && getIcon()}
    </S.MainInfoCard>
  );
};

export default MainInfoCard;
