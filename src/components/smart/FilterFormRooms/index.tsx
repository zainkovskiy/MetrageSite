import React from 'react';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import FlexBox from '../../ui/FlexBox';
import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '../../ui/Checkbox';
const FilterFormRooms = () => {
  const { control, watch, getValues } = useFormContext();
  watch('typeEstate');
  return (
    <FlexBox column gap='1rem'>
      <Controller
        name='roomsCount'
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup
            onChange={(value) => field.onChange(value)}
            value={field.value}
            multiple
          >
            <ToggleButton value='1' label='1' />
            <ToggleButton value='2' label='2' />
            <ToggleButton value='3' label='3' />
            <ToggleButton value='4' label='4' />
            <ToggleButton value='5' label='5' />
            <ToggleButton value='6+' label='6+' />
          </ToggleButtonGroup>
        )}
      />
      <Controller
        name='isStudio'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Студия'
            onChange={field.onChange}
            checked={field.value}
          />
        )}
      />
    </FlexBox>
  );
};

export default FilterFormRooms;
