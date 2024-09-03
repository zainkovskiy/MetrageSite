import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { useAppSelector } from '../../../core/hooks/storeHook';
import MainRealtorCard from '../MainRealtorCard';
import { Link } from 'react-router-dom';

const MainRealtors = () => {
  const { realtors } = useAppSelector((state) => state.main);
  return (
    <S.MainRealtors>
      <S.MainRealtorsText>
        <Text sizeStr='clamp(26px, 4vw, 44px)'>Наши специалисты</Text>
        <ButtonLink
          size={16}
          label='все специалисты'
          color='primaryDark'
          uppercase
          bold
          arrow='right'
          as={Link}
          to='/rieltors'
        />
      </S.MainRealtorsText>
      <S.MainRealtorsCards>
        {realtors.map((realtor) => (
          <MainRealtorCard key={realtor.UID} {...realtor} />
        ))}
      </S.MainRealtorsCards>
    </S.MainRealtors>
  );
};

export default MainRealtors;
