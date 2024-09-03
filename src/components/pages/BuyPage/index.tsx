import React, { useEffect } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import FilterForm from '../../smart/FilterForm';
import * as S from './style';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import { getObjects } from '../../../core/store/slices/objectsSlice';

const BuyPage = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.object);
  useEffect(() => {
    console.log(filter);
    getObjectsList();
  }, []);
  const getObjectsList = () => {
    dispatch(getObjects());
  };
  return (
    <CenterContainer>
      <PaddingSide>
        <S.BuyFilter>
          <FilterForm />
        </S.BuyFilter>
        <S.BuyPage>
          <FlexBox jContent='space-between' aItems='flex-end'>
            <Text size={56}>Купить</Text>
            sortFilter
          </FlexBox>
          <S.BuyCards>
            <div>card</div>
          </S.BuyCards>
          <S.BuyPagination>
            <span>1</span>
            <span>2</span>
          </S.BuyPagination>
        </S.BuyPage>
      </PaddingSide>
    </CenterContainer>
  );
};

export default BuyPage;
