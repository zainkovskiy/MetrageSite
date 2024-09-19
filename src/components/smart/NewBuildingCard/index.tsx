import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import { INewBuildings } from '../../../core/models/newBuildings';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';

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
          <ButtonLink
            size={24}
            label={name}
            color='primary'
            as={Link}
            to={`/newbuildings/${UID}`}
          />
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
