import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import { IContactsOfficeFullProps } from './type';
import FlexBox from '../../ui/FlexBox';
import ButtonLink from '../../ui/ButtonLink';
import { ReactComponent as Mail } from '../../../assets/images/mail_small.svg';
import { ReactComponent as Phone } from '../../../assets/images/phone_small.svg';
import { ReactComponent as Clock } from '../../../assets/images/clock.svg';

const ContactsOfficeFull = (props: IContactsOfficeFullProps) => {
  const { office, onClick } = props;
  return (
    <S.ContactsOfficeFull>
      <ButtonLink
        label='Назад'
        arrow='left'
        color='primary'
        onClick={onClick}
      />
      <FlexBox column>
        <Text size={18}>{office.address}</Text>
        {office.officeNumber && <Text size={16}>{office.officeNumber}</Text>}
      </FlexBox>
      <FlexBox gap='0.3rem' aItems='center'>
        <Phone />
        <ButtonLink
          size={16}
          label={office.phones}
          href={`tel:${office.phones}`}
        />
      </FlexBox>
      <FlexBox gap='0.3rem' aItems='center'>
        <Mail />
        <ButtonLink
          size={16}
          label={office.officeMail}
          color='primary'
          href={`mailto:${office.officeMail}`}
        />
      </FlexBox>
      <FlexBox gap='0.3rem' aItems='center'>
        <Clock />
        <Text size={16}>{office.operatingMode}</Text>
      </FlexBox>
    </S.ContactsOfficeFull>
  );
};

export default ContactsOfficeFull;
