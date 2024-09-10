import React, { useEffect } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import FilterForm from '../../smart/FilterForm';
import * as S from './style';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import {
  cleareState,
  getObjects,
} from '../../../core/store/slices/objectsSlice';
import { Outlet, useLocation } from 'react-router-dom';
import { ContextOtletType } from './type';
import { LatLngBounds } from 'leaflet';
const ObjectPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const mapRegExp = new RegExp('map', 'i');
  const buyRegExp = new RegExp('buy', 'i');
  const isMap = mapRegExp.test(location.pathname);
  const isBuy = buyRegExp.test(location.pathname);

  const { filter, data, sort, bBox } = useAppSelector((state) => state.object);
  const { region } = useAppSelector((state) => state.main);
  useEffect(() => {
    getObjectsList();
    //bbox делает запрос 2 раза при запуске карты
  }, [filter, region, sort, bBox]);
  useEffect(() => {
    return () => {
      dispatch(cleareState());
    };
  }, []);
  const getObjectsList = (page?: number) => {
    const raw = {
      location: region,
      direction: isBuy ? 'buy' : 'rent',
      page: page || data?.curPage || 1,
      mode: isMap ? 'map' : 'card',
      orderBy: sort,
      bBox: bBox,
      ...filter,
    };
    dispatch(getObjects(raw));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <CenterContainer>
        <PaddingSide>
          <S.ObjectFilterWrap>
            <FilterForm />
          </S.ObjectFilterWrap>
        </PaddingSide>
      </CenterContainer>
      <Outlet context={{ getObjectsList } satisfies ContextOtletType} />
    </>
  );
};

export default ObjectPage;
