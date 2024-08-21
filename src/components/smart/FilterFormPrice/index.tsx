import React from 'react';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import FlexBox from '../../ui/FlexBox';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../../ui/Input';
const FilterFormPrice = () => {
  const { control } = useFormContext();
  return (
    <FlexBox column gap='1rem'>
      <FlexBox gap='0.5rem'>
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
      </FlexBox>
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
