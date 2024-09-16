import React from 'react';
import * as S from './style';
import { IObjects } from '../../../core/models/objects';
import Text from '../../ui/Text';
import { useNumberTriad } from '../../../core/hooks/numberTriade';
import HorizontLine from '../../simple/HorizontLine';
import FlexBox from '../../ui/FlexBox';

const ObjectCard = (props: IObjects) => {
  const {
    photo,
    price,
    pricePerMeter,
    address,
    UID,
    typeCard,
    typeObject,
    totalArea,
  } = props;

  return (
    <S.ObjectCard>
      <S.ObjectCardImgWrap to={`${typeCard}/${UID}`}>
        <S.ObjectCardImg src={photo} />
      </S.ObjectCardImgWrap>
      <FlexBox column>
        <Text size={24}>{useNumberTriad(price)} &#8381;</Text>
        <Text size={16}>
          {useNumberTriad(pricePerMeter)} &#8381;/м<sup>2</sup>
        </Text>
      </FlexBox>
      <Text size={16}>
        {typeObject} &#183; {totalArea}м<sup>2</sup>
      </Text>
      <HorizontLine />
      <Text size={16}>{address}</Text>
    </S.ObjectCard>
  );
};

export default ObjectCard;
