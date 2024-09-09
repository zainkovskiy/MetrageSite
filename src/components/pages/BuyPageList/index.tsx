import React, { useState } from 'react';
import ObjectCard from '../../smart/ObjectCard';
import Pagination from '../../ui/Pagination';
import ListBox from '../../ui/ListBox';
import ListBoxItem from '../../ui/ListBoxItem';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import { ReactComponent as Sort } from '../../../assets/images/sorting.svg';
import { sortFilter, sortFilterList } from '../../../core/constants/sortFilter';
import { useAppSelector } from '../../../core/hooks/storeHook';
import * as S from './style';
import { useObjectOutletProps } from '../BuyPage/hookOutlet';
import PaddingSide from '../../containers/PaddingSide';
import CenterContainer from '../../containers/CenterContainer';

const BuyPageList = () => {
  const { sort, setSort, setNewPage } = useObjectOutletProps();
  const { data } = useAppSelector((state) => state.object);
  const [active, setActive] = useState(false);
  const _active = () => {
    setActive(!active);
  };
  const setNewSort: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    const id = e.currentTarget.id;
    setSort(id);
  };
  return (
    <CenterContainer>
      <PaddingSide>
        <S.BuyPageList>
          <FlexBox jContent='space-between' aItems='flex-end'>
            <Text size={56}>Купить</Text>

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
          <S.BuyPageListCards>
            {data?.items &&
              data.items.length > 0 &&
              data.items.map((object) => (
                <ObjectCard {...object} key={object.UID} />
              ))}
          </S.BuyPageListCards>
          {data?.pagesCount && (
            <S.BuyPageListPagination>
              <Pagination
                count={data.pagesCount}
                page={data?.curPage || 1}
                onChange={setNewPage}
              />
            </S.BuyPageListPagination>
          )}
        </S.BuyPageList>
      </PaddingSide>
    </CenterContainer>
  );
};

export default BuyPageList;
