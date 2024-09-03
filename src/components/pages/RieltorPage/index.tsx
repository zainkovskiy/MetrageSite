import React, { useEffect, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';

import * as S from './style';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import { getRieltors } from '../../../core/store/slices/rieltorsSlice';
import MainRealtorCard from '../../smart/MainRealtorCard';
import LogoWithLine from '../../simple/LogoWithLine';
import InfoCard from '../../simple/InfoCard';
import FormNamePhone from '../../smart/FormNamePhone';
import FormNamePhoneSmall from '../../smart/FormNamePhoneSmall';
import InputSearch from '../../ui/InputSearch';
import { findRealtors, getOneRealtor } from '../../../core/api/api';
import { IRealtorFull, IRealtorsSearch } from '../../../core/models/main';
import ButtonLink from '../../ui/ButtonLink';
import { Link, useParams } from 'react-router-dom';
import RieltorObject from '../../simple/RieltorObject';
import RealtorInfoSmall from '../../simple/RealtorInfoSmall';
import { ReactComponent as Mail } from '../../../assets/images/mail_small.svg';
import { ReactComponent as Pin } from '../../../assets/images/pin_small.svg';
import { ReactComponent as Phone } from '../../../assets/images/phone_small.svg';
import { ReactComponent as Home } from '../../../assets/images/home_small.svg';
import HorizontLine from '../../simple/HorizontLine';

const RieltorPage = () => {
  const params = useParams();
  const [rieltor, setRealtor] = useState<IRealtorFull | null>(null);
  useEffect(() => {
    getRieltor();
  }, []);
  const getRieltor = () => {
    if (params?.id) {
      getOneRealtor(params.id).then((fullRieltor) => {
        if (fullRieltor) {
          console.log(fullRieltor);

          setRealtor(fullRieltor);
        }
      });
    }
  };

  return (
    <CenterContainer>
      <PaddingSide>
        <S.RieltorPageTop>
          <ButtonLink
            arrow='left'
            label='к списку риелторов'
            uppercase
            as={Link}
            to='/rieltors'
            color='primary'
          />
        </S.RieltorPageTop>
        <S.RieltorPage>
          <S.RieltorPageRight>
            <S.RieltorPageInfo>
              <S.RieltorPageImg src={rieltor?.avatar} />
              <FlexBox column gap='1.5rem'>
                <FlexBox column gap='0.5rem'>
                  <Text sizeStr='clamp(32px, 5vw, 56px)'>
                    {rieltor?.firstName} {rieltor?.lastName}
                  </Text>
                  <Text size={18}>{rieltor?.officeName}</Text>
                </FlexBox>
                <S.RieltorPageContacts>
                  <FlexBox gap='0.3rem' aItems='center'>
                    <Pin />
                    <Text size={16}>Офис: {rieltor?.officeName}</Text>
                  </FlexBox>
                  <FlexBox gap='0.3rem' aItems='flex-start'>
                    <Phone />
                    <FlexBox column gap='0.5rem'>
                      {rieltor?.phones.map((tel) => (
                        <ButtonLink
                          key={tel}
                          size={16}
                          label={tel}
                          href={`tel:${tel}`}
                        />
                      ))}
                    </FlexBox>
                  </FlexBox>
                  <FlexBox gap='0.3rem' aItems='center'>
                    <Mail />
                    <ButtonLink
                      size={16}
                      href={`mailto:${rieltor?.email}`}
                      label={rieltor?.email}
                    />
                  </FlexBox>
                  <HorizontLine />
                  <FlexBox gap='1rem'>
                    {rieltor?.socNetworks.map((network) => {
                      return (
                        <S.RealtorPageNetwork
                          target='_blank'
                          href={network.URL}
                          $image={network.image}
                          key={network.URL}
                        />
                      );
                    })}
                  </FlexBox>
                </S.RieltorPageContacts>
                <Text size={16}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur reprehenderit repellendus blanditiis nisi sapiente
                  aspernatur consectetur quod obcaecati est illo pariatur
                  aliquid excepturi in ea, repellat, sequi placeat dignissimos
                  omnis.
                </Text>
                {rieltor?.aboutUs && <Text size={16}>{rieltor.aboutUs}</Text>}
              </FlexBox>
            </S.RieltorPageInfo>
            <Text size={24}>Объекты риелтора</Text>
            <S.RieltorPageObjects>
              {rieltor?.objects &&
                rieltor.objects.map((object) => (
                  <RieltorObject key={object.UID} {...object} />
                ))}
            </S.RieltorPageObjects>
          </S.RieltorPageRight>
          <div>
            <S.RieltorPageFixForm>
              <RealtorInfoSmall
                office={rieltor?.officeName || ''}
                phone={rieltor?.phones || []}
                email={rieltor?.email || ''}
                socNetworks={rieltor?.socNetworks || []}
              />
              <FormNamePhoneSmall
                text='или оставьте номер, риелтор вам перезвонит'
                buttonText='Перезвоните мне'
                fontSize={14}
              />
            </S.RieltorPageFixForm>
          </div>
        </S.RieltorPage>
      </PaddingSide>
    </CenterContainer>
  );
};

export default RieltorPage;
