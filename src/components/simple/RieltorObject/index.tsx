import React from 'react';
import * as S from './style';
import { IRieltorObject } from '../../../core/models/main';
import Text from '../../ui/Text';
import { useNumberTriad } from '../../../core/hooks/numberTriade';

const RieltorObject = ({
  photo,
  price,
  address,
  UID,
  typeCard,
}: IRieltorObject) => {
  return (
    <S.RieltorObject>
      <S.RieltorObjectImgLink to={`/buy/${typeCard}/${UID}/`}>
        <S.RieltorObjectImg src={photo} />
      </S.RieltorObjectImgLink>
      <Text size={24}>{useNumberTriad(price)} &#8381;</Text>
      <Text size={14}>{address}</Text>
    </S.RieltorObject>
  );
};

export default RieltorObject;
