import React, { useRef, useState } from 'react';
import { IRealtors } from '../../../core/models/main';
import * as S from './style';
import Button from '../../ui/Button';
import { getNumberPhone } from '../../../core/api/api';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';

const RealtorContactCard = (props: IRealtors) => {
  const { avatar, firstName, lastName, phone, UID } = props;
  const gotPhoneRef = useRef(false);
  const [curPhone, setCurPhone] = useState(`${phone}...показать номер`);
  const getPhone = () => {
    if (gotPhoneRef.current) {
      window.location.href = `tel://${phone}`;
      return;
    }
    getNumberPhone(UID).then((newPhone) => {
      if (newPhone) {
        setCurPhone(newPhone);
        gotPhoneRef.current = true;
      }
    });
  };
  return (
    <S.RealtorContactCard>
      <S.RealtorContactCardImg src={avatar} />
      <ButtonLink
        size={24}
        bold
        label={`${firstName} ${lastName}`}
        as={Link}
        to={`/rieltors/${UID}`}
      />
      <Button fullWidth onClick={getPhone}>
        {curPhone}
      </Button>
    </S.RealtorContactCard>
  );
};

export default RealtorContactCard;
