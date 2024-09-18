import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import { INewBuildings } from '../../../core/models/newBuildings';

const NewBuildingCard = (props: INewBuildings) => {
  const { image, deadLine, name, address, description, UID } = props;
  return (
    <S.NewBuildingCard>
      <S.NewBuildingCardImageWrap to={`/newbuildings/${UID}`}>
        <S.NewBuildingCardImage src={image} />
      </S.NewBuildingCardImageWrap>
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
      </S.NewBuildingCardWrap>
    </S.NewBuildingCard>
  );
};

export default NewBuildingCard;
