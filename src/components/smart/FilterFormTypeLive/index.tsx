import React from 'react';
import Checkbox from '../../ui/Checkbox';
import HorizontLine from '../../simple/HorizontLine';
import {
  Controller,
  useFormContext,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';
import { filterTypeLive } from '../../../core/constants/filter';

const FilterFormTypeLive = () => {
  const { control } = useFormContext();
  const setNewValue = (
    field: ControllerRenderProps<FieldValues, 'subTypeEstate'>,
    value: string
  ) => {
    if (Array.isArray(field.value)) {
      if (field.value.includes(value)) {
        field.onChange(field.value.filter((item) => item !== value));
        return;
      }
      field.onChange([...field.value, value]);
      return;
    }
    field.onChange([value]);
  };
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
      {filterTypeLive.map((subType, index) => (
        <Controller
          key={`subTypeEstate${index}`}
          name='subTypeEstate'
          control={control}
          render={({ field }) => (
            <Checkbox
              label={subType.label}
              value={subType.value}
              onChange={() => setNewValue(field, subType.value)}
              checked={field.value.includes(`${subType.value}`)}
            />
          )}
        />
      ))}
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

export default FilterFormTypeLive;
