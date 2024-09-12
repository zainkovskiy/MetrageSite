import React, { useEffect, useState } from 'react';
import ObjectCard from '../../smart/ObjectCard';
import Pagination from '../../ui/Pagination';
import ListBox from '../../ui/ListBox';
import ListBoxItem from '../../ui/ListBoxItem';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import { ReactComponent as Sort } from '../../../assets/images/sorting.svg';
import { sortFilter, sortFilterList } from '../../../core/constants/sortFilter';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import * as S from './style';
import { useObjectOutletProps } from '../ObjectPage/hookOutlet';
import PaddingSide from '../../containers/PaddingSide';
import CenterContainer from '../../containers/CenterContainer';
import { setSort } from '../../../core/store/slices/objectsSlice';
import { useLocation } from 'react-router-dom';

const ObjectListPage = () => {
  const location = useLocation();
  const buyRegExp = new RegExp('buy', 'i');
  const isBuy = buyRegExp.test(location.pathname);
  const { getObjectsList } = useObjectOutletProps();
  const { data, sort } = useAppSelector((state) => state.object);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (data?.mode) {
      getObjectsList();
    }
  }, []);

  const _active = () => {
    setActive(!active);
  };
  const setNewSort: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    const id = e.currentTarget.id;
    dispatch(setSort(id));
  };
  return (
    <CenterContainer>
      <PaddingSide>
        <S.ObjectListPage>
          <FlexBox jContent='space-between' aItems='flex-end'>
            <Text size={56}>{isBuy ? 'Купить' : 'Снять'}</Text>

            <ListBox
              title={sortFilter[sort]}
              iconEnd={<Sort />}
              open={active}
              onClick={_active}
              size={16}
              padding='1rem'
              hightlight={sort}
            >
              {sortFilterList.map((item, idx) => (
                <ListBoxItem key={idx} id={item.id} onClick={setNewSort}>
                  {item.title}
                </ListBoxItem>
              ))}
            </ListBox>
          </FlexBox>
          <S.ObjectListPageCards>
            {data?.items &&
              data.items.length > 0 &&
              data.items.map((object) => (
                <ObjectCard {...object} key={object.UID} />
              ))}
          </S.ObjectListPageCards>
          {data?.pagesCount && (
            <S.ObjectListPagePagination>
              <Pagination
                count={data.pagesCount}
                page={data?.curPage || 1}
                onChange={getObjectsList}
              />
            </S.ObjectListPagePagination>
          )}
        </S.ObjectListPage>
      </PaddingSide>
    </CenterContainer>
  );
};

export default ObjectListPage;
