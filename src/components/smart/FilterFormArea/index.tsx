import React from 'react';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import FlexBox from '../../ui/FlexBox';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../../ui/Input';
const FilterFormArea = () => {
  const { control } = useFormContext();
  return (
    <FlexBox gap='0.5rem'>
      <Controller
        name='areaFrom'
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
        name='areaTo'
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
  );
};

export default FilterFormArea;
