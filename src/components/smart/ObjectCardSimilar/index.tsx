import React from 'react';
import * as S from './style';
import { ISimilarObject } from '../../../core/models/objects';
import Text from '../../ui/Text';
import { useNumberTriad } from '../../../core/hooks/numberTriade';
import HorizontLine from '../../simple/HorizontLine';
import FlexBox from '../../ui/FlexBox';

const ObjectCardSimilar = (props: ISimilarObject) => {
  const { photo, price, address, UID, typeCard, typeObject, totalArea } = props;

  return (
    <S.ObjectCardSimilar>
      <S.ObjectCardImgWrap to={`/buy/${typeCard}/${UID}`}>
        <S.ObjectCardImg src={photo} />
      </S.ObjectCardImgWrap>
      <FlexBox column>
        <Text size={24}>{useNumberTriad(price)} &#8381;</Text>
        <Text size={16}>
          {typeObject} &#183; {totalArea}м<sup>2</sup>
        </Text>
      </FlexBox>
      <HorizontLine />
      <Text size={16}>{address}</Text>
    </S.ObjectCardSimilar>
  );
};

export default ObjectCardSimilar;
