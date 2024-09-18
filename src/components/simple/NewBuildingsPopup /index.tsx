import React from 'react';
import * as S from './style';
import FlexBox from '../../ui/FlexBox';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import { INewBuildings } from '../../../core/models/newBuildings';

const NewBuildingsPopup = (props: INewBuildings) => {
  const { image, address, UID, name } = props;
  const pathLink = `/newbuildings/${UID}`;
  return (
    <S.ObjectPopup>
      <S.ObjectPopupImage src={image} />
      <FlexBox column jContent='space-between' gap='0.5rem'>
        <FlexBox column>
          <Text color='primary' size={18}>
            {name}
          </Text>
          <Text>{address}</Text>
        </FlexBox>
        <ButtonLink label='Открыть' as={Link} to={pathLink} color='primary' />
      </FlexBox>
    </S.ObjectPopup>
  );
};

export default NewBuildingsPopup;
