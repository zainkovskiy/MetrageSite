import React from 'react';
import * as S from './style';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import { IObjectsFullComplex } from '../../../core/models/objects';

const ComplexContactCard = (props: IObjectsFullComplex) => {
  const { UID, picture, name } = props;
  return (
    <S.ComplexContactCard>
      <S.ComplexContactCardImg src={picture} />
      <ButtonLink
        size={24}
        bold
        label={name}
        as={Link}
        to={`/newbuildings/${UID}`}
      />
    </S.ComplexContactCard>
  );
};

export default ComplexContactCard;
