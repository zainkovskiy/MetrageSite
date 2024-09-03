import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import { IInfoCards } from './type';
const InfoCard = (props: IInfoCards) => {
  const { title, text, icon } = props;
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
    <S.InfoCard>
      <S.InfoCardTextWrap>
        <Text sizeStr='clamp(20px, 3vw, 24px)'>{title}</Text>
        <Text size={14}>{text}</Text>
      </S.InfoCardTextWrap>
      {icon && getIcon()}
    </S.InfoCard>
  );
};

export default InfoCard;
