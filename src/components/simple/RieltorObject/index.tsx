import React from 'react';
import * as S from './style';
import { IRieltorObject } from '../../../core/models/main';
import Text from '../../ui/Text';
import { useNumberTriad } from '../../../core/hooks/numberTriade';
import FlexBox from '../../ui/FlexBox';
import HorizontLine from '../HorizontLine';

const RieltorObject = ({
  photo,
  price,
  address,
  UID,
  typeCard,
  typeObject,
  totalArea,
}: IRieltorObject) => {
  return (
    <S.RieltorObject>
      <S.RieltorObjectImgLink to={`/buy/${typeCard}/${UID}/`}>
        <S.RieltorObjectImg src={photo} />
      </S.RieltorObjectImgLink>
      <FlexBox column>
        <Text size={24}>{useNumberTriad(price)} &#8381;</Text>
        <Text size={16}>
          {typeObject} &#183; {totalArea}м<sup>2</sup>
        </Text>
      </FlexBox>
      <HorizontLine />
      <Text size={14}>{address}</Text>
    </S.RieltorObject>
  );
};

export default RieltorObject;
