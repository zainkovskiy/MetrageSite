import React, { useState } from 'react';
import Tabs from '../../ui/Tabs';
import Tab from '../../ui/Tab';
import TabsPanel from '../../ui/TabsPanel';
import FilterBuy from '../FilterBuy';
import * as S from './style';
import FilterSell from '../FilterSell';
import PaddingSide from '../../containers/PaddingSide';

const Filter = () => {
  const [indexTab, setIndexTab] = useState('buy');
  const handleChange = (newIndex: string) => {
    setIndexTab(newIndex);
  };
  return (
    <S.Filter>
      <S.FilterContainer>
        <PaddingSide>
          <Tabs value={indexTab} onChange={handleChange}>
            <Tab label='Купить' activeKey='buy' />
            <Tab label='Снять' activeKey='rent' />
            <Tab label='Продать' activeKey='sell' />
          </Tabs>
          <TabsPanel activeKey='buy' value={indexTab}>
            <FilterBuy />
          </TabsPanel>
          <TabsPanel activeKey='rent' value={indexTab}>
            <div>rent</div>
          </TabsPanel>
          <TabsPanel activeKey='sell' value={indexTab}>
            <FilterSell />
          </TabsPanel>
        </PaddingSide>
      </S.FilterContainer>
    </S.Filter>
  );
};

export default Filter;
