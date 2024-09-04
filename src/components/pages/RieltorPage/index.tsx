import React, { useEffect, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import FormNamePhoneSmall from '../../smart/FormNamePhoneSmall';
import { getOneRealtor } from '../../../core/api/api';
import { IRealtorFull } from '../../../core/models/main';
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
              <S.RieltorPageImgWrap>
                <S.RieltorPageImg src={rieltor?.avatar} />
                {rieltor?.rewards && rieltor?.rewards.length > 0 && (
                  <S.RieltorPageRewardsWrap>
                    <Text size={16}>Документы и награды</Text>
                    <S.RieltorPageRewards>
                      {rieltor.rewards.map((reward) => (
                        <S.RieltorPageRewardImg src={reward.image} />
                      ))}
                    </S.RieltorPageRewards>
                  </S.RieltorPageRewardsWrap>
                )}
              </S.RieltorPageImgWrap>
              <FlexBox column gap='1.5rem'>
                <FlexBox column gap='0.5rem'>
                  <Text sizeStr='clamp(32px, 5vw, 56px)'>
                    {rieltor?.firstName} {rieltor?.lastName}
                  </Text>
                  <Text size={18}>{rieltor?.officeName}</Text>
                </FlexBox>
                <S.RieltorPageContacts>
                  {rieltor?.specialisation &&
                    rieltor?.specialisation.length > 0 && (
                      <FlexBox gap='0.3rem' aItems='flex-start'>
                        <Home />
                        <FlexBox column gap='0.5rem'>
                          {rieltor?.specialisation.map((spec) => (
                            <Text key={spec} size={16}>
                              {spec}
                            </Text>
                          ))}
                        </FlexBox>
                      </FlexBox>
                    )}
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
                specialisation={rieltor?.specialisation || []}
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
