import React, { useEffect } from 'react';
import * as S from './style';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';
import Input from '../../ui/Input';
import InputButton from '../../ui/InputButton';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IFormDataBuy } from './type';
import FilterFormType from '../FilterFormType';
import FilterFormRooms from '../FilterFormRooms';
import FilterFormPrice from '../FilterFormPrice';
import FilterFormArea from '../FilterFormArea';
const FilterBuy = () => {
  const method = useForm({
    defaultValues: {
      typeEstate: 'live',
      subTypeEstate: '',
      roomsCount: [],
      isStudio: false,
      priceFrom: null,
      priceTo: null,
      priceType: '',
      areaFrom: null,
      areaTo: null,
    },
  });
  useEffect(() => {
    method.watch((value, { name, type }) => {
      if (name === 'typeEstate') {
        method.setValue('subTypeEstate', '');
      }
    });
  }, [method.watch]);
  const onSubmit: SubmitHandler<IFormDataBuy> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...method}>
      <S.FilterBuy onSubmit={method.handleSubmit(onSubmit)}>
        <S.FilterBuyInputs>
          <InputButton label='Тип'>
            <FilterFormType />
          </InputButton>
          <InputButton label='Комнатность'>
            <FilterFormRooms />
          </InputButton>
          {/* <InputButton label='Цена'>
            <FilterFormPrice />
          </InputButton> */}
          <InputButton label='Площадь'>
            <FilterFormArea />
          </InputButton>
          <Input fullWidth placeholder='Улица' />
        </S.FilterBuyInputs>
        <FlexBox
          jContent={method.formState.isDirty ? 'space-between' : 'flex-end'}
        >
          {method.formState.isDirty && <Button variant='text'>Сбросить</Button>}
          <FlexBox gap='12px'>
            <Button variant='outline'>На карте</Button>
            <Button type='submit'>Найти</Button>
          </FlexBox>
        </FlexBox>
      </S.FilterBuy>
    </FormProvider>
  );
};

export default FilterBuy;
