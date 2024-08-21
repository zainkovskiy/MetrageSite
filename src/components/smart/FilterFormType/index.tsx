import React, { useEffect } from 'react';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import FlexBox from '../../ui/FlexBox';
import { Controller, useFormContext } from 'react-hook-form';
import FilterFormTypeLive from '../FilterFormTypeLive';
import FilterFormTypeBusiness from '../FilterFormTypeBusiness';
const FilterFormType = () => {
  const { control, watch, getValues } = useFormContext();
  watch('typeEstate');
  return (
    <FlexBox column gap='1rem'>
      <Controller
        name='typeEstate'
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup
            onChange={(value) => field.onChange(value)}
            value={field.value}
          >
            <ToggleButton value='live' label='Жилая' />
            <ToggleButton value='business' label='Коммерческая' />
          </ToggleButtonGroup>
        )}
      />
      {getValues('typeEstate') === 'live' && <FilterFormTypeLive />}
      {getValues('typeEstate') === 'business' && <FilterFormTypeBusiness />}
    </FlexBox>
  );
};

export default FilterFormType;
