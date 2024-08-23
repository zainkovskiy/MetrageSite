import React from 'react';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import FlexBox from '../../ui/FlexBox';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../../ui/Input';
import * as S from './style';

const FilterFormPrice = () => {
  const { control } = useFormContext();
  return (
    <FlexBox column gap='1rem'>
      <S.FilterFormPrice>
        <Controller
          name='priceFrom'
          control={control}
          render={({ field }) => (
            <Input
              type='number'
              value={field.value || ''}
              onChange={field.onChange}
              placeholder='от'
            />
          )}
        />
        <Controller
          name='priceTo'
          control={control}
          render={({ field }) => (
            <Input
              type='number'
              value={field.value || ''}
              onChange={field.onChange}
              placeholder='до'
            />
          )}
        />
      </S.FilterFormPrice>
      <Controller
        name='priceType'
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup
            onChange={(value) => field.onChange(value)}
            value={field.value}
          >
            <ToggleButton value='all' label='За все' />
            <ToggleButton value='m2' label='За м2' />
          </ToggleButtonGroup>
        )}
      />
    </FlexBox>
  );
};

export default FilterFormPrice;
