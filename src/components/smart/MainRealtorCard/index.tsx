import React from 'react';
import { IRealtors } from '../../../core/models/main';
import * as S from './style';
import Text from '../../ui/Text';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';

const MainRealtorCard = (props: IRealtors) => {
  const { avatar, firstName, lastName, phone, officeName, speciality } = props;
  return (
    <S.MainRealtorCard>
      <S.MainRealtorCardImgWrap>
        <S.MainRealtorCardImg src={avatar} />
        {speciality && (
          <S.MainRealtorCardSpeciality>
            <Text color='white'>{speciality}</Text>
          </S.MainRealtorCardSpeciality>
        )}
      </S.MainRealtorCardImgWrap>
      <S.MainRealtorCardWrap>
        <S.MainRealtorCardWrapText>
          <Text size={24} bold>
            {firstName} {lastName}
          </Text>
          <Text>{officeName}</Text>
        </S.MainRealtorCardWrapText>
        <S.MainRealtorCardWrapButton>
          <Button fullWidth>{phone}...показать номер</Button>
        </S.MainRealtorCardWrapButton>
      </S.MainRealtorCardWrap>
    </S.MainRealtorCard>
  );
};

export default MainRealtorCard;
