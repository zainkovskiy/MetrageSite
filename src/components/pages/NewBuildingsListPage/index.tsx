import React, { useEffect } from 'react';
import { useAppSelector } from '../../../core/hooks/storeHook';
import * as S from './style';
import Pagination from '../../ui/Pagination';
import NewBuildingCard from '../../smart/NewBuildingCard';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import { useBuildingOutletProps } from '../NewBuildingsPage/hookOutlet';

const NewBuildingsListPage = () => {
  const { data } = useAppSelector((state) => state.newbuildings);
  const { getList } = useBuildingOutletProps();
  useEffect(() => {
    getList();
  }, []);
  const changePagination = (page: number) => {
    getList(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <CenterContainer>
      <PaddingSide>
        <S.NewBuildingsListPage>
          <S.NewBuildingsListPageItems>
            {data?.items &&
              data.items.map((item) => (
                <NewBuildingCard key={item.UID} {...item} />
              ))}
          </S.NewBuildingsListPageItems>

          {data?.pagesCount && (
            <S.NewBuildingsListPagePaggination>
              <Pagination
                count={data.pagesCount}
                page={data?.curPage || 1}
                onChange={changePagination}
              />
            </S.NewBuildingsListPagePaggination>
          )}
        </S.NewBuildingsListPage>
      </PaddingSide>
    </CenterContainer>
  );
};

export default NewBuildingsListPage;
