import React, { useEffect } from 'react';
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

const BuyPage = () => {
  const dispatch = useAppDispatch();
  const { filter, data } = useAppSelector((state) => state.object);
  const { region } = useAppSelector((state) => state.main);
  useEffect(() => {
    getObjectsList();
  }, [filter, region]);
  const getObjectsList = (page?: number) => {
    const raw = {
      location: region,
      direction: 'buy',
      page: page || data?.curPage || 1,
      mode: 'card',
      ...filter,
    };
    dispatch(getObjects(raw));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
            {data?.items &&
              data.items.length > 0 &&
              data.items.map((object) => (
                <ObjectCard {...object} key={object.UID} />
              ))}
          </S.BuyCards>
          {data?.pagesCount && (
            <S.BuyPagination>
              <Pagination
                count={data.pagesCount}
                page={data?.curPage || 1}
                onChange={getObjectsList}
              />
            </S.BuyPagination>
          )}
        </S.BuyPage>
      </PaddingSide>
    </CenterContainer>
  );
};

export default BuyPage;
