import React, { useEffect, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import FilterForm from '../../smart/FilterForm';
import * as S from './style';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import { getObjects } from '../../../core/store/slices/objectsSlice';
import ObjectCard from '../../smart/ObjectCard';
import Pagination from '../../ui/Pagination';
import { useLocation, useParams, Link } from 'react-router-dom';
import { getObjectFull } from '../../../core/api/api';
import ButtonLink from '../../ui/ButtonLink';
import { IObjectsFull } from '../../../core/models/objects';
import { useNumberTriad } from '../../../core/hooks/numberTriade';

const BuyPageFull = () => {
  const params = useParams();
  const [object, setObject] = useState<IObjectsFull | null>(null);

  useEffect(() => {
    getObject();
  }, []);
  const getObject = () => {
    if (params?.id && params?.type) {
      getObjectFull(params.id, params.type).then((fullObject) => {
        if (fullObject) {
          console.log(fullObject);
          setObject(fullObject);
        }
      });
    }
  };
  if (!object) {
    return;
  }
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
        <S.BuyPageFull>
          <S.BuyPageFullRight>
            <S.BuyPageFullPhotoContainer>
              <S.BuyPageFullPhotoWrap>
                <S.BuyPageFullPhotoImg src={object.images[0]} />
              </S.BuyPageFullPhotoWrap>
              <S.BuyPageFullPhotoSmallContainer>
                <S.BuyPageFullPhotoSmallWrap>
                  <S.BuyPageFullPhotoSmallImg src={object.images[1]} />
                </S.BuyPageFullPhotoSmallWrap>
                <S.BuyPageFullPhotoSmallWrap>
                  <S.BuyPageFullPhotoSmallImg src={object.images[1]} />
                </S.BuyPageFullPhotoSmallWrap>
                <S.BuyPageFullPhotoSmallWrap>
                  <S.BuyPageFullPhotoSmallImg src={object.images[1]} />
                </S.BuyPageFullPhotoSmallWrap>
                <S.BuyPageFullPhotoSmallWrap>
                  <S.BuyPageFullPhotoSmallImg src={object.images[1]} />
                </S.BuyPageFullPhotoSmallWrap>
              </S.BuyPageFullPhotoSmallContainer>
            </S.BuyPageFullPhotoContainer>
          </S.BuyPageFullRight>
        </S.BuyPageFull>
      </PaddingSide>
    </CenterContainer>
  );
};

export default BuyPageFull;
