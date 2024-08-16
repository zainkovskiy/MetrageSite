import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { useAppSelector } from '../../../core/hooks/storeHook';
import MainRealtorCard from '../MainRealtorCard';

const MainRealtors = () => {
  const { realtors } = useAppSelector((state) => state.main);
  return (
    <S.MainRealtors>
      <S.MainRealtorsText>
        <Text size={44}>Наши специалисты</Text>
        <ButtonLink
          size={16}
          label='все специалисты'
          color='primaryDark'
          uppercase
          bold
          arrow='right'
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
