import React from 'react';
import * as S from './style';
import { INewBuildings } from '../../../core/models/main';
import Text from '../../ui/Text';
import Button from '../../ui/Button';

const NewBuildingCard = (props: INewBuildings) => {
  const { image, deadLine, name, address, description } = props;
  return (
    <S.NewBuildingCard>
      <S.NewBuildingCardImage src={image} />
      <S.NewBuildingCardWrap>
        <S.NewBuildingCardTextWrap>
          <Text>{deadLine}</Text>
          <Text size={24} color='primary'>
            {name}
          </Text>
          <Text>{address}</Text>
          <S.NewBuildingDescriptionText>
            {description}
          </S.NewBuildingDescriptionText>
        </S.NewBuildingCardTextWrap>
        <Button>Перезвоните мне</Button>
      </S.NewBuildingCardWrap>
    </S.NewBuildingCard>
  );
};

export default NewBuildingCard;
// Резиденция на Покровском бульваре
