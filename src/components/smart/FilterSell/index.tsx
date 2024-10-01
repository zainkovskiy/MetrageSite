import React from 'react';
import * as S from './style';
import Button from '../../ui/Button';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import Input from '../../ui/Input';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from '../../ui/Select';
import SelectItem from '../../ui/SelectItem';
import { IFilterSellFormData } from '../../../core/models/main';
import { sellFilterForm } from '../../../core/api/api';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import { openSnackBar } from '../../../core/store/slices/MainInfoSlice';

const FilterSell = () => {
  const dispatch = useAppDispatch();
  const { region } = useAppSelector((state) => state.main);
  const { control, handleSubmit, getValues, watch } = useForm({
    defaultValues: {
      objectType: 'Квартира',
      phone: '',
    },
  });
  const validateValuePhone = (value: string) => {
    const number = value.replace(/\D/g, '');

    const codeRF = `+${number.substring(0, 1)}`;
    const codeRegion = number.substring(1, 4);
    const codeCity = number.substring(4, 7);
    const codeNumber1 = number.substring(7, 9);
    const codeNumber2 = number.substring(9, 11);
    if (number.length === 0) {
      return number;
    }
    if (number.length === 1) {
      if (number === '7') {
        return '+7';
      }
      return `+7 (${number}`;
    }

    if (number.length <= 4) {
      return `${codeRF} (${codeRegion}`;
    }
    if (number.length <= 7) {
      return `${codeRF} (${codeRegion}) ${codeCity}`;
    }
    if (number.length <= 9) {
      return `${codeRF} (${codeRegion}) ${codeCity}-${codeNumber1}`;
    }
    if (number.length <= 11) {
      return `${codeRF} (${codeRegion}) ${codeCity}-${codeNumber1}-${codeNumber2}`;
    }
    return number;
  };
  const onSubmit: SubmitHandler<IFilterSellFormData> = (data) => {
    sellFilterForm({
      location: region,
      URL: window.location.href,
      formData: data,
    }).then(() => {
      dispatch(openSnackBar());
    });
  };
  watch('phone');
  return (
    <S.FilterSell onSubmit={handleSubmit(onSubmit)}>
      <Text bold size={16}>
        Получите бесплатную консультацию по продаже или{' '}
        <ButtonLink
          as={Link}
          to='/sell'
          label='подайте объявление'
          bold
          color='primaryLite'
          size={16}
        />
      </Text>
      <S.FilterBuyInputs>
        <Controller
          name='objectType'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={(newValue) => field.onChange(newValue)}
            >
              <SelectItem value='Квартира'>Квартира</SelectItem>
              <SelectItem value='Комната'>Комната</SelectItem>
              <SelectItem value='Дом/дача'>Дом/дача</SelectItem>
              <SelectItem value='Земельный участок'>
                Земельный участок
              </SelectItem>
            </Select>
          )}
        />
        <Controller
          name='phone'
          control={control}
          render={({ field }) => (
            <Input
              fullWidth
              value={field.value}
              onChange={(e) => {
                field.onChange(validateValuePhone(e.target.value));
              }}
              placeholder='Телефон'
              maxLength={18}
            />
          )}
        />
        <Button disabled={getValues('phone').length !== 18} type='submit'>
          Перезвоните мне
        </Button>
      </S.FilterBuyInputs>
    </S.FilterSell>
  );
};

export default FilterSell;
