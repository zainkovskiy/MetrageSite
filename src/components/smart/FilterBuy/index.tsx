import React from 'react';
import * as S from './style';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';
import InputWithBox from '../../ui/InputWithBox';
const FilterBuy = () => {
  return (
    <S.FilterBuy>
      <S.FilterBuyInputs>
        <InputWithBox placeholder='Тип' />
        <InputWithBox placeholder='Комнатность' />
        <InputWithBox placeholder='Цена' />
        <InputWithBox placeholder='Еще...' />
        <InputWithBox placeholder='Улица' />
      </S.FilterBuyInputs>
      <FlexBox jContent='space-between'>
        <Button variant='text'>Сбросить</Button>
        <FlexBox gap='12px'>
          <Button variant='outline'>На карте</Button>
          <Button>Найдено 6 000 предложений</Button>
        </FlexBox>
      </FlexBox>
    </S.FilterBuy>
  );
};

export default FilterBuy;
