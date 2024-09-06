import React, { useEffect, useRef, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import Text from '../../ui/Text';
import { useParams, Link } from 'react-router-dom';
import { getObjectFull } from '../../../core/api/api';
import ButtonLink from '../../ui/ButtonLink';
import { IObjectsFull } from '../../../core/models/objects';
import { useNumberTriad } from '../../../core/hooks/numberTriade';
import ObjectCardSimilar from '../../smart/ObjectCardSimilar';
import FormNamePhoneSmall from '../../smart/FormNamePhoneSmall';
import RealtorContactCard from '../../smart/RealtorContactCard';
import MapOneObject from '../../smart/MapOneObject';

const BuyPageFull = () => {
  const params = useParams();
  const mapRef = useRef<HTMLDivElement>(null);
  const [object, setObject] = useState<IObjectsFull | null>(null);
  useEffect(() => {
    getObject();
  }, [params]);
  const getObject = () => {
    if (params?.id && params?.type) {
      getObjectFull(params.id, params.type).then((fullObject) => {
        if (fullObject) {
          console.log(fullObject);
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
    <CenterContainer>
      <PaddingSide>
        <S.BuyPageFullTop>
          <ButtonLink
            arrow='left'
            label='к списку'
            uppercase
            as={Link}
            to='/buy'
            color='primary'
          />
        </S.BuyPageFullTop>
        <S.BuyPageFullAddress>
          <Text sizeStr='clamp(22px, 5vw, 32px)'>{object.address}</Text>
          <S.BuyPageFullPrice>
            <Text size={32}>{useNumberTriad(object.price)} &#8381;</Text>
            <Text>
              {useNumberTriad(object.pricePerMeter)} &#8381;/м<sup>2</sup>
            </Text>
          </S.BuyPageFullPrice>
        </S.BuyPageFullAddress>
        {object?.lat && object?.lng && (
          <ButtonLink label='На карте' color='primary' onClick={scrollToMap} />
        )}
        <S.BuyPageFull>
          <S.BuyPageFullRight>
            <S.BuyPageFullPhotoContainer>
              <S.BuyPageFullPhotoWrap>
                <S.BuyPageFullPhotoImg src={object.images[0]} />
              </S.BuyPageFullPhotoWrap>
              <S.BuyPageFullPhotoSmallContainer>
                {object.images.map((image, idx) => {
                  if (idx >= 1 && idx <= 4) {
                    return (
                      <S.BuyPageFullPhotoSmallWrap key={idx}>
                        <S.BuyPageFullPhotoSmallImg src={image} />
                      </S.BuyPageFullPhotoSmallWrap>
                    );
                  }
                })}
              </S.BuyPageFullPhotoSmallContainer>
            </S.BuyPageFullPhotoContainer>
            <S.BuyPageFullCharacteristics>
              <Text size={20}>Характеристики</Text>
              {object?.possibleKeys &&
                object.possibleKeys.map((item) => (
                  <S.BuyPageFullCharacteristicsItem key={item.key}>
                    <Text size={16} color='greyDark'>
                      {item.title}
                    </Text>
                    <Text size={16}>
                      {getCharacteristicsValue(item.key as keyof IObjectsFull)}
                    </Text>
                  </S.BuyPageFullCharacteristicsItem>
                ))}
            </S.BuyPageFullCharacteristics>
            {object?.description && (
              <S.BuyPageFullDescription>
                <Text size={20}>Характеристики</Text>
                <Text size={16}>{object.description}</Text>
              </S.BuyPageFullDescription>
            )}
            {object?.lat && object?.lng && (
              <S.BuyPageFullMap ref={mapRef}>
                <Text sizeStr='clamp(26px, 4vw, 44px)'>На карте</Text>
                <MapOneObject lat={object.lat} lng={object.lng} />
              </S.BuyPageFullMap>
            )}
          </S.BuyPageFullRight>
          <div>
            <S.BuyPageFullContacts>
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
            </S.BuyPageFullContacts>
          </div>
        </S.BuyPageFull>
        {object?.similar && (
          <S.BuyPageFulSimilar>
            <Text sizeStr='clamp(26px, 4vw, 44px)'>
              Вас могут заинтересовать
            </Text>
            <S.BuyPageFulSimilarItems>
              {object.similar.map((similar) => (
                <ObjectCardSimilar key={similar.UID} {...similar} />
              ))}
            </S.BuyPageFulSimilarItems>
          </S.BuyPageFulSimilar>
        )}
      </PaddingSide>
    </CenterContainer>
  );
};

export default BuyPageFull;
