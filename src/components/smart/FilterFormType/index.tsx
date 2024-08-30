import React, { useEffect } from 'react';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import FlexBox from '../../ui/FlexBox';
import { Controller, useFormContext } from 'react-hook-form';
import FilterFormTypeLive from '../FilterFormTypeLive';
import FilterFormTypeBusiness from '../FilterFormTypeBusiness';
import FilterFormTypeLiveRent from '../FilterFormTypeLiveRent';
const FilterFormType = ({ filterActive }: { filterActive?: string }) => {
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
      {getValues('typeEstate') === 'live' && (
        <>
          {filterActive === 'rent' ? (
            <FilterFormTypeLiveRent />
          ) : (
            <FilterFormTypeLive />
          )}
        </>
      )}
      {getValues('typeEstate') === 'business' && (
        <FilterFormTypeBusiness isRent={filterActive === 'rent'} />
      )}
    </FlexBox>
  );
};

export default FilterFormType;
