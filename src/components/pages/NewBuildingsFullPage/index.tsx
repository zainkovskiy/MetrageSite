import React, { useEffect, useRef, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import Text from '../../ui/Text';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getNewBuildingsFull } from '../../../core/api/api';
import ButtonLink from '../../ui/ButtonLink';
import { IObjectsFull } from '../../../core/models/objects';
import { useNumberTriad } from '../../../core/hooks/numberTriade';
import ObjectCardSimilar from '../../smart/ObjectCardSimilar';
import FormNamePhoneSmall from '../../smart/FormNamePhoneSmall';
import RealtorContactCard from '../../smart/RealtorContactCard';
import MapOneObject from '../../smart/MapOneObject';
import WindowDialog from '../../ui/WindowDialog';
import ObjectGalary from '../../smart/ObjectGalary';
import { INewBuildingsFull } from '../../../core/models/newBuildings';
import FlexBox from '../../ui/FlexBox';
import { ReactComponent as Deadline } from '../../../assets/images/deadline.svg';
import { ReactComponent as Count } from '../../../assets/images/count.svg';
import { ReactComponent as Material } from '../../../assets/images/material.svg';
import InfoCard from '../../simple/InfoCard';
import AccordeonNewBuildings from '../../smart/AccordeonNewBuildings';

const NewBuildingsFullPage = () => {
  const params = useParams();
  const mapRef = useRef<HTMLDivElement>(null);
  const [object, setObject] = useState<INewBuildingsFull | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getObject();
  }, [params]);
  const getObject = () => {
    if (params?.id) {
      getNewBuildingsFull(params.id).then((fullObject) => {
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
  const openGalary = () => {
    setOpen(true);
  };
  const closeGalary = () => {
    setOpen(false);
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
        <S.NewBuildingsFullTop>
          <ButtonLink
            arrow='left'
            label='к списку'
            uppercase
            as={Link}
            to='/newbuildings'
            color='primary'
          />
        </S.NewBuildingsFullTop>
        <S.NewBuildingsFullTitle>
          <Text sizeStr='clamp(32px, 5vw, 56px)'>{object.name}</Text>
          {object?.priceRange && (
            <Text size={24}>{object.priceRange} &#8381;</Text>
          )}
        </S.NewBuildingsFullTitle>
        <ButtonLink label='На карте' color='primary' onClick={scrollToMap} />
        <S.NewBuildingsFullPage>
          <S.NewBuildingsFullRight>
            <S.NewBuildingsFullPhotoContainer>
              <S.NewBuildingsFulllPhotoWrap>
                <S.NewBuildingsFullPhotoImg
                  src={object.images[0]}
                  onClick={openGalary}
                />
              </S.NewBuildingsFulllPhotoWrap>
              <S.NewBuildingsFullPhotoSmallContainer>
                {object.images.map((image, idx) => {
                  if (idx >= 1 && idx <= 4) {
                    return (
                      <S.NewBuildingsFullPhotoSmallWrap key={idx}>
                        <S.NewBuildingsFullPhotoSmallImg
                          src={image}
                          onClick={openGalary}
                        />
                        {idx === 4 && object.images.length > 3 && (
                          <S.NewBuildingsFullCountImage>
                            +{object.images.length - 4}
                          </S.NewBuildingsFullCountImage>
                        )}
                      </S.NewBuildingsFullPhotoSmallWrap>
                    );
                  }
                })}
              </S.NewBuildingsFullPhotoSmallContainer>
            </S.NewBuildingsFullPhotoContainer>
            <S.NewBuildingsFullAddressWrap>
              <Text size={16}>{object.address} </Text>
            </S.NewBuildingsFullAddressWrap>
            {object?.description && (
              <S.NewBuildingsFullDescription>
                <Text size={20}>Описание</Text>
                <Text size={16}>{object.description}</Text>
              </S.NewBuildingsFullDescription>
            )}
            <S.NewBuildingsFullCharacteristics>
              <Text size={20}>Характеристики ЖК</Text>
              <S.NewBuildingsFullCharacteristicsItems>
                {object?.dateOfConstruction && (
                  <FlexBox aItems='flex-start' gap='0.5rem'>
                    <Deadline />
                    <FlexBox column gap='0.3rem'>
                      <Text color='greyDark' size={16}>
                        Дата сдачи
                      </Text>
                      <Text size={16} bold>
                        {object.dateOfConstruction}
                      </Text>
                    </FlexBox>
                  </FlexBox>
                )}
                {object?.countBuildings && (
                  <FlexBox aItems='flex-start' gap='0.5rem'>
                    <Count />
                    <FlexBox column gap='0.3rem'>
                      <Text color='greyDark' size={16}>
                        Корпусов
                      </Text>
                      <Text size={16} bold>
                        {object.countBuildings}
                      </Text>
                    </FlexBox>
                  </FlexBox>
                )}
                {object?.buildingTypes && (
                  <FlexBox aItems='flex-start' gap='0.5rem'>
                    <Material />
                    <FlexBox column gap='0.3rem'>
                      <Text color='greyDark' size={16}>
                        Тип дома
                      </Text>
                      <Text size={16} bold>
                        {object.buildingTypes}
                      </Text>
                    </FlexBox>
                  </FlexBox>
                )}
              </S.NewBuildingsFullCharacteristicsItems>
            </S.NewBuildingsFullCharacteristics>
            {object?.buyMethods && (
              <S.NewBuildingsFullWrapper>
                <Text sizeStr='clamp(26px, 4vw, 44px)'>Способы покупки</Text>
                <S.NewBuildingsFullBuyMethodCards>
                  {object.buyMethods?.hasMortgage && (
                    <InfoCard icon='cross' title='Ипотека' />
                  )}
                  {object.buyMethods?.hasVoenMortgage && (
                    <InfoCard
                      icon='around'
                      title='Военная ипотека'
                      text='Сниженная ставка по ипотеке'
                    />
                  )}
                  {object.buyMethods?.hasSubsidy && (
                    <InfoCard
                      icon='arrow'
                      title='Субсидирование'
                      text='Сниженная ставка по ипотеке'
                    />
                  )}
                </S.NewBuildingsFullBuyMethodCards>
              </S.NewBuildingsFullWrapper>
            )}
            {object?.appartmentItems && object?.appartmentItems.length > 0 && (
              <S.NewBuildingsFullWrapper>
                <Text sizeStr='clamp(26px, 4vw, 44px)'>Квартиры ЖК</Text>
                <FlexBox column>
                  {object.appartmentItems.map((item) => (
                    <AccordeonNewBuildings key={item.UID} {...item} />
                  ))}
                </FlexBox>
              </S.NewBuildingsFullWrapper>
            )}
            {object?.centroid && (
              <S.NewBuildingsFullWrapper ref={mapRef}>
                <Text sizeStr='clamp(26px, 4vw, 44px)'>На карте</Text>
                <MapOneObject {...object.centroid} />
              </S.NewBuildingsFullWrapper>
            )}
          </S.NewBuildingsFullRight>
          <div>
            <S.NewBuildingsFullContacts>
              <S.NewBuildingsFullObject>
                <Text size={24}>Об объекте</Text>
                <FlexBox column gap='0.5rem'>
                  <FlexBox aItems='baseline'>
                    <Text>Цены:</Text>
                    <S.Dots />
                    <Text bold>{object.priceRange}</Text>
                  </FlexBox>
                  <FlexBox aItems='baseline'>
                    <Text>Квартиры:</Text>
                    <S.Dots />
                    <Text bold>{object.areaRange}</Text>
                  </FlexBox>
                  <FlexBox aItems='baseline'>
                    <Text nowrap>Дата сдачи:</Text>
                    <S.Dots />
                    <Text bold>{object.dateOfConstruction}</Text>
                  </FlexBox>
                </FlexBox>
                {object?.developerName && (
                  <FlexBox column>
                    <Text color='greyDark'>Застройщик</Text>
                    <Text>{object.developerName}</Text>
                  </FlexBox>
                )}
              </S.NewBuildingsFullObject>
              <FormNamePhoneSmall
                text='оставьте ваш номер, и мы вам перезвоним'
                fontSize={14}
                buttonText='Перезвоните мне'
              />
            </S.NewBuildingsFullContacts>
          </div>
        </S.NewBuildingsFullPage>
        {object.images.length > 0 && (
          <WindowDialog open={open}>
            <ObjectGalary onClose={closeGalary} images={object.images} />
          </WindowDialog>
        )}
      </PaddingSide>
    </CenterContainer>
  );
};

export default NewBuildingsFullPage;
