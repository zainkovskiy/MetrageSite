import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { ReactComponent as Mail } from '../../../assets/images/mail_small.svg';
import { ReactComponent as Phone } from '../../../assets/images/phone_small.svg';
import { ReactComponent as Pin } from '../../../assets/images/pin_small.svg';
import { ReactComponent as Home } from '../../../assets/images/home_small.svg';
import FlexBox from '../../ui/FlexBox';
import { IRealtorInfoSmall } from './type';
import HorizontLine from '../HorizontLine';

const RealtorInfoSmall = (props: IRealtorInfoSmall) => {
  const { office, phone, email, socNetworks, specialisation } = props;
  return (
    <S.RealtorInfoSmall>
      {specialisation && specialisation.length > 0 && (
        <FlexBox gap='0.3rem' aItems='flex-start'>
          <Home />
          <FlexBox column gap='0.5rem'>
            {specialisation.map((spec) => (
              <Text key={spec} size={16}>
                {spec}
              </Text>
            ))}
          </FlexBox>
        </FlexBox>
      )}
      <FlexBox gap='0.3rem' aItems='center'>
        <Pin />
        <Text size={16}>Офис: {office}</Text>
      </FlexBox>
      <FlexBox gap='0.3rem' aItems='flex-start'>
        <Phone />
        <FlexBox column gap='0.5rem'>
          {phone.map((tel) => (
            <ButtonLink key={tel} size={16} label={tel} href={`tel:${tel}`} />
          ))}
        </FlexBox>
      </FlexBox>
      <FlexBox gap='0.3rem' aItems='center'>
        <Mail />
        <ButtonLink size={16} href={`mailto:${email}`} label={email} />
      </FlexBox>
      <HorizontLine />
      <FlexBox gap='1rem'>
        {socNetworks.map((network) => {
          return (
            <S.RealtorInfoSmallNetwork
              target='_blank'
              href={network.URL}
              $image={network.image}
              key={network.URL}
            />
          );
        })}
      </FlexBox>
    </S.RealtorInfoSmall>
  );
};

export default RealtorInfoSmall;
