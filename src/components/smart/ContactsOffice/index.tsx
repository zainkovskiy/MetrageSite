import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import { IContactsOfficeProps } from './type';
import FlexBox from '../../ui/FlexBox';
import { ReactComponent as Mail } from '../../../assets/images/mail_small.svg';
import { ReactComponent as Phone } from '../../../assets/images/phone_small.svg';

const ContactsOffice = (props: IContactsOfficeProps) => {
  const { office, onClick } = props;
  const handleClick = () => {
    onClick(office);
  };
  return (
    <S.ContactsOffice onClick={handleClick}>
      <FlexBox column>
        <Text size={18} color='primary'>
          {office.address}
        </Text>
        {office.officeNumber && <Text size={16}>{office.officeNumber}</Text>}
      </FlexBox>
      <FlexBox gap='0.3rem' aItems='center'>
        <Phone />
        <Text size={16}>{office.phones}</Text>
      </FlexBox>
    </S.ContactsOffice>
  );
};

export default ContactsOffice;
