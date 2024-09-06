import React from 'react';
import * as S from './style';
import { IObjects, ISimilarObject } from '../../../core/models/objects';
import Text from '../../ui/Text';
import { useNumberTriad } from '../../../core/hooks/numberTriade';
import HorizontLine from '../../simple/HorizontLine';
import FlexBox from '../../ui/FlexBox';

const ObjectCardSimilar = (props: ISimilarObject) => {
  const { photo, price, address, UID, typeCard } = props;

  return (
    <S.ObjectCardSimilar>
      <S.ObjectCardImgWrap to={`/buy/${typeCard}/${UID}`}>
        <S.ObjectCardImg src={photo} />
      </S.ObjectCardImgWrap>
      <FlexBox column>
        <Text size={24}>От {useNumberTriad(price)} &#8381;</Text>
      </FlexBox>
      <HorizontLine />
      <Text size={16}>{address}</Text>
    </S.ObjectCardSimilar>
  );
};

export default ObjectCardSimilar;
