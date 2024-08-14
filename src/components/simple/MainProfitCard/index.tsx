import React from 'react';
import * as S from './style';
import { IMainProfitCardProps } from './type';
import Text from '../../ui/Text';
const MainProfitCard = (props: IMainProfitCardProps) => {
  const { label, linkTitle, onClick, id } = props;
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <S.MainProfitCard
      id={id}
      onClick={handleClick}
      $isButton={Boolean(linkTitle)}
    >
      <Text size={20}>{label}</Text>
      {linkTitle && (
        <Text size={16} color='primaryDark'>
          {linkTitle}
        </Text>
      )}
    </S.MainProfitCard>
  );
};

export default MainProfitCard;
