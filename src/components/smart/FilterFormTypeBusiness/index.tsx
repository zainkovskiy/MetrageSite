import React from 'react';
import Checkbox from '../../ui/Checkbox';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import { filterTypeBusiness } from '../../../core/constants/filter';

const FilterFormTypeBusiness = () => {
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
      {filterTypeBusiness.map((subType, index) => (
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
    </>
  );
};
export default FilterFormTypeBusiness;
