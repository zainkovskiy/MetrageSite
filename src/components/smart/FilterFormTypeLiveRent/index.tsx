import React from 'react';
import Checkbox from '../../ui/Checkbox';
import HorizontLine from '../../simple/HorizontLine';
import { Controller, useFormContext } from 'react-hook-form';

const FilterFormTypeLiveRent = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name='subTypeEstate'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Квартира в новостройке'
            value='newBuildingFlat'
            onChange={(e) => {
              field.value === 'newBuildingFlat'
                ? field.onChange('')
                : field.onChange(e.target.value);
            }}
            checked={field.value === 'newBuildingFlat'}
          />
        )}
      />
      <HorizontLine color='#989898' />
      <Controller
        name='subTypeEstate'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Квартира во вторичке'
            value='flat'
            onChange={(e) => {
              field.value === 'flat'
                ? field.onChange('')
                : field.onChange(e.target.value);
            }}
            checked={field.value === 'flat'}
          />
        )}
      />
      <HorizontLine color='#989898' />
      <Controller
        name='subTypeEstate'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Комната'
            value='room'
            onChange={(e) => {
              field.value === 'room'
                ? field.onChange('')
                : field.onChange(e.target.value);
            }}
            checked={field.value === 'room'}
          />
        )}
      />
      <HorizontLine color='#989898' />
      <Controller
        name='subTypeEstate'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Дом, дача'
            value='house'
            onChange={(e) => {
              field.value === 'house'
                ? field.onChange('')
                : field.onChange(e.target.value);
            }}
            checked={field.value === 'house'}
          />
        )}
      />
      <HorizontLine color='#989898' />
      <Controller
        name='subTypeEstate'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Гараж'
            value='garage'
            onChange={(e) => {
              field.value === 'room'
                ? field.onChange('')
                : field.onChange(e.target.value);
            }}
            checked={field.value === 'garage'}
          />
        )}
      />
    </>
  );
};

export default FilterFormTypeLiveRent;
