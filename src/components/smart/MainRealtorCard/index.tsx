import React, { useState } from 'react';
import { IRealtors } from '../../../core/models/main';
import * as S from './style';
import Text from '../../ui/Text';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';
import { getNumberPhone } from '../../../core/api/api';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';

const MainRealtorCard = (props: IRealtors) => {
  const { avatar, firstName, lastName, phone, officeName, speciality, UID } =
    props;
  const navigate = useNavigate();
  const [curPhone, setCurPhone] = useState(`${phone}...показать номер`);
  const getPhone = () => {
    getNumberPhone(UID).then((newPhone) => {
      if (newPhone) {
        setCurPhone(newPhone);
      }
    });
  };
  const navigateTo = () => {
    navigate(`${UID}`);
  };
  return (
    <S.MainRealtorCard>
      <S.MainRealtorCardImgWrap>
        <S.MainRealtorCardImg src={avatar} onClick={navigateTo} />
        {speciality && (
          <S.MainRealtorCardSpeciality>
            <Text color='white'>{speciality}</Text>
          </S.MainRealtorCardSpeciality>
        )}
      </S.MainRealtorCardImgWrap>
      <S.MainRealtorCardWrap>
        <S.MainRealtorCardWrapText>
          <ButtonLink
            size={24}
            bold
            label={`${firstName} ${lastName}`}
            as={Link}
            to={`${UID}`}
          />
          <Text>{officeName}</Text>
        </S.MainRealtorCardWrapText>
        <S.MainRealtorCardWrapButton>
          <Button fullWidth onClick={getPhone}>
            {curPhone}
          </Button>
        </S.MainRealtorCardWrapButton>
      </S.MainRealtorCardWrap>
    </S.MainRealtorCard>
  );
};

export default MainRealtorCard;
