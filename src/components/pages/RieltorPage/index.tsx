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
import Tooltip from '../../ui/Tooltip';
import WindowDialog from '../../ui/WindowDialog';
import FormNamePhone from '../../smart/FormNamePhone';
import LogoWithLine from '../../simple/LogoWithLine';

const RieltorPage = () => {
  const params = useParams();
  const [rieltor, setRealtor] = useState<IRealtorFull | null>(null);
  const [reward, setReward] = useState<string | null>(null);

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
  const openReward = (image: string) => {
    setReward(image);
  };
  const closeReward = () => {
    setReward(null);
  };
  if (!rieltor) {
    return;
  }
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
            <S.RieltorPageInfo
              itemScope
              itemType='http://schema.org/ImageObject'
            >
              <S.RieltorPageImgWrap>
                <S.RieltorPageImg
                  src={rieltor?.avatar}
                  itemProp='contentUrl'
                  alt={`Агентство Metrage. ${rieltor?.firstName} ${rieltor?.lastName}`}
                />
                {rieltor?.rewards && rieltor?.rewards.length > 0 && (
                  <S.RieltorPageRewardsWrap>
                    <Text size={16}>Документы и награды</Text>
                    <S.RieltorPageRewards>
                      {rieltor.rewards.map((reward) => (
                        <Tooltip
                          key={reward.title}
                          title={reward.title}
                          position='right'
                        >
                          <S.RieltorPageRewardImg
                            src={reward.image}
                            onClick={() => openReward(reward.image)}
                          />
                        </Tooltip>
                      ))}
                    </S.RieltorPageRewards>
                  </S.RieltorPageRewardsWrap>
                )}
              </S.RieltorPageImgWrap>
              <FlexBox column gap='1.5rem'>
                <FlexBox column gap='0.5rem'>
                  <Text sizeStr='clamp(32px, 5vw, 56px)' itemProp='description'>
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
            {rieltor?.reviews && rieltor.reviews.length > 0 && (
              <S.RieltorPageReviewBlock>
                <Text size={24}>Отзывы</Text>
                <S.RieltorPageReviews>
                  {rieltor.reviews.map((review) => (
                    <S.RieltorPageReview href={review.URL} target='_blank'>
                      <Text size={18}>{review.title}</Text>
                      <S.RieltorPageReviewLogo src={review.image} />
                    </S.RieltorPageReview>
                  ))}
                </S.RieltorPageReviews>
              </S.RieltorPageReviewBlock>
            )}
            {rieltor.videoReviews.length > 0 && (
              <S.RieltorPageVideos>
                <S.RieltorPageVideosWrap>
                  {rieltor.videoReviews.map((video) => (
                    <div
                      itemScope
                      itemProp='VideoObject'
                      itemType='https://schema.org/VideoObject'
                    >
                      {/* <span itemProp='name'>{video.name}</span> */}
                      <meta itemProp='uploadDate' content={video.uploadDate} />
                      <meta
                        itemProp='description'
                        content={video.description}
                      />
                      <meta itemProp='contentUrl' content={video.contentUrl} />
                      <video controls width='250' poster={video.thumbnailUrl}>
                        <source
                          src={video.contentUrl}
                          type={video.contentType}
                        />
                        <meta
                          itemProp='thumbnailUrl'
                          content={video.thumbnailUrl}
                        />
                      </video>
                    </div>
                  ))}
                </S.RieltorPageVideosWrap>
              </S.RieltorPageVideos>
            )}
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
        <S.RieltorPageCallMe>
          <LogoWithLine fullFill />
          <FormNamePhone
            text='Оставьте номер, риелтор вам перезвонит'
            buttonText='Перезвоните мне'
          />
        </S.RieltorPageCallMe>
        <WindowDialog open={Boolean(reward)}>
          <S.RieltorPageRewardFullImg
            onClick={closeReward}
            src={reward || ''}
          />
        </WindowDialog>
      </PaddingSide>
    </CenterContainer>
  );
};

export default RieltorPage;
