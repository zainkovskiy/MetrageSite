import React, { useEffect, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import FilterForm from '../../smart/FilterForm';
import * as S from './style';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import { getObjects } from '../../../core/store/slices/objectsSlice';
import { Outlet } from 'react-router-dom';
import { ContextOtletType } from './type';
const BuyPage = () => {
  const dispatch = useAppDispatch();
  const { filter, data } = useAppSelector((state) => state.object);
  const { region } = useAppSelector((state) => state.main);
  const [sort, setSort] = useState('default');
  useEffect(() => {
    getObjectsList();
  }, [filter, region, sort]);
  const getObjectsList = (page?: number) => {
    const raw = {
      location: region,
      direction: 'buy',
      page: page || data?.curPage || 1,
      mode: 'card',
      orderBy: sort,
      ...filter,
    };
    dispatch(getObjects(raw));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const setNewPage = (page: number) => {
    getObjectsList(page);
  };
  return (
    <>
      <CenterContainer>
        <PaddingSide>
          <S.BuyFilter>
            <FilterForm />
          </S.BuyFilter>
        </PaddingSide>
      </CenterContainer>
      <Outlet
        context={{ sort, setSort, setNewPage } satisfies ContextOtletType}
      />
    </>
  );
};

export default BuyPage;
