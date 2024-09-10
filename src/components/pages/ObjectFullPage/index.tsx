import React, { useEffect, useRef, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import Text from '../../ui/Text';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getObjectFull } from '../../../core/api/api';
import ButtonLink from '../../ui/ButtonLink';
import { IObjectsFull } from '../../../core/models/objects';
import { useNumberTriad } from '../../../core/hooks/numberTriade';
import ObjectCardSimilar from '../../smart/ObjectCardSimilar';
import FormNamePhoneSmall from '../../smart/FormNamePhoneSmall';
import RealtorContactCard from '../../smart/RealtorContactCard';
import MapOneObject from '../../smart/MapOneObject';

const ObjectFullPage = () => {
  const params = useParams();
  const location = useLocation();
  const buyRegExp = new RegExp('buy', 'i');
  const isBuy = buyRegExp.test(location.pathname);
  const mapRef = useRef<HTMLDivElement>(null);
  const [object, setObject] = useState<IObjectsFull | null>(null);
  useEffect(() => {
    getObject();
  }, [params]);
  const getObject = () => {
    if (params?.id && params?.type) {
      getObjectFull(params.id, params.type).then((fullObject) => {
        if (fullObject) {
          setObject(fullObject);
        }
      });
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  if (!object) {
    return;
  }
  const getCharacteristicsValue = (key: keyof IObjectsFull) => {
    const value = object[key];
    if (!value) {
      return;
    }
    if (typeof value === 'number' || typeof value === 'string') {
      return value;
    }
    return;
  };
  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };
  return (
    <CenterContainer key={object.UID}>
      <PaddingSide>
        <S.ObjectFullTop>
          <ButtonLink
            arrow='left'
            label='к списку'
            uppercase
            as={Link}
            to={isBuy ? '/buy' : '/rent'}
            color='primary'
          />
        </S.ObjectFullTop>
        <S.ObjectFullAddress>
          <Text sizeStr='clamp(22px, 5vw, 32px)'>{object.address}</Text>
          <S.ObjectFullPrice>
            <Text size={32}>{useNumberTriad(object.price)} &#8381;</Text>
            <Text>
              {useNumberTriad(object.pricePerMeter)} &#8381;/м<sup>2</sup>
            </Text>
          </S.ObjectFullPrice>
        </S.ObjectFullAddress>
        {object?.lat && object?.lng && (
          <ButtonLink label='На карте' color='primary' onClick={scrollToMap} />
        )}
        <S.ObjectFullPage>
          <S.ObjectFullRight>
            <S.ObjectFullPhotoContainer>
              <S.ObjectFulllPhotoWrap>
                <S.ObjectFullPhotoImg src={object.images[0]} />
              </S.ObjectFulllPhotoWrap>
              <S.ObjectFullPhotoSmallContainer>
                {object.images.map((image, idx) => {
                  if (idx >= 1 && idx <= 4) {
                    return (
                      <S.ObjectFullPhotoSmallWrap key={idx}>
                        <S.ObjectFullPhotoSmallImg src={image} />
                      </S.ObjectFullPhotoSmallWrap>
                    );
                  }
                })}
              </S.ObjectFullPhotoSmallContainer>
            </S.ObjectFullPhotoContainer>
            <S.ObjectFullCharacteristics>
              <Text size={20}>Характеристики</Text>
              {object?.possibleKeys &&
                object.possibleKeys.map((item) => (
                  <S.ObjectFullCharacteristicsItem key={item.key}>
                    <Text size={16} color='greyDark'>
                      {item.title}
                    </Text>
                    <Text size={16}>
                      {getCharacteristicsValue(item.key as keyof IObjectsFull)}
                    </Text>
                  </S.ObjectFullCharacteristicsItem>
                ))}
            </S.ObjectFullCharacteristics>
            {object?.description && (
              <S.ObjectFullDescription>
                <Text size={20}>Характеристики</Text>
                <Text size={16}>{object.description}</Text>
              </S.ObjectFullDescription>
            )}
            {object?.lat && object?.lng && (
              <S.ObjectFullMap ref={mapRef}>
                <Text sizeStr='clamp(26px, 4vw, 44px)'>На карте</Text>
                <MapOneObject lat={object.lat} lng={object.lng} />
              </S.ObjectFullMap>
            )}
          </S.ObjectFullRight>
          <div>
            <S.ObjectFullContacts>
              {object?.realtor && <RealtorContactCard {...object.realtor} />}
              <FormNamePhoneSmall
                name={!object.realtor}
                text={
                  object.realtor
                    ? 'или оставьте ваш номер, и мы вам перезвоним'
                    : 'Получить бесплатную консультацию'
                }
                fontSize={object.realtor && 14}
                buttonText={object.realtor && 'Перезвоните мне'}
              />
            </S.ObjectFullContacts>
          </div>
        </S.ObjectFullPage>
        {object?.similar && (
          <S.ObjectFullSimilar>
            <Text sizeStr='clamp(26px, 4vw, 44px)'>
              Вас могут заинтересовать
            </Text>
            <S.ObjectFullSimilarItems>
              {object.similar.map((similar) => (
                <ObjectCardSimilar key={similar.UID} {...similar} />
              ))}
            </S.ObjectFullSimilarItems>
          </S.ObjectFullSimilar>
        )}
      </PaddingSide>
    </CenterContainer>
  );
};

export default ObjectFullPage;
