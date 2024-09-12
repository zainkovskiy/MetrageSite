import React from 'react';
import { IObjects } from '../../../core/models/objects';
import * as S from './style';
import FlexBox from '../../ui/FlexBox';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { Link, useLocation } from 'react-router-dom';

const ObjectPopup = (props: IObjects) => {
  const location = useLocation();
  const buyRegExp = new RegExp('buy', 'i');
  const isBuy = buyRegExp.test(location.pathname);
  const { photo, address, UID, typeCard } = props;
  const pathLink = `/${isBuy ? 'buy' : 'rent'}/${typeCard}/${UID}`;
  return (
    <S.ObjectPopup>
      <S.ObjectPopupImage src={photo} />
      <FlexBox column jContent='space-between' gap='0.5rem'>
        <Text>{address}</Text>
        <ButtonLink label='Открыть' as={Link} to={pathLink} color='primary' />
      </FlexBox>
    </S.ObjectPopup>
  );
};

export default ObjectPopup;
