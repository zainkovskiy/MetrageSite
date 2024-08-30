import React, { useEffect } from 'react';
import * as S from './style';
import Button from '../../ui/Button';
import InputButton from '../../ui/InputButton';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { IFilterFormData } from './type';
import FilterFormType from '../FilterFormType';
import FilterFormRooms from '../FilterFormRooms';
import FilterFormPrice from '../FilterFormPrice';
import FilterFormArea from '../FilterFormArea';
import {
  defaultFilter,
  filterTypeTranslate,
} from '../../../core/constants/filter';
import Dadata from '../../ui/Dadata';
const FilterForm = ({ filterActive }: { filterActive?: string }) => {
  const method = useForm({
    defaultValues: defaultFilter,
  });

  useEffect(() => {
    method.watch((value, { name, type }) => {
      if (name === 'typeEstate') {
        method.setValue('subTypeEstate', '');
      }
    });
  }, [method.watch]);
  const onSubmit: SubmitHandler<IFilterFormData> = (data) => {
    console.log(data);
  };
  const getColumns = () => {
    if (method.getValues('typeEstate') === 'live') {
      const currentSubTypeEstate = method.getValues('subTypeEstate');
      switch (currentSubTypeEstate) {
        case 'newBuildingFlat':
          return 3;
        case 'flat':
          return 3;
        case 'garage':
          return 3;
        default:
          return 2;
      }
    }
    return 3;
  };
  const getTypeLabel = () => {
    const values = method.getValues('subTypeEstate');
    if (values.length > 0 && Array.isArray(values)) {
      return values
        .map((item) => {
          return filterTypeTranslate[item];
        })
        .join(', ');
    }
    if (values && !Array.isArray(values)) {
      return filterTypeTranslate[values];
    }
    return 'Тип';
  };
  const getPriceLabel = () => {
    const priceFrom = method.getValues('priceFrom');
    const priceTo = method.getValues('priceTo');
    if (priceFrom && priceTo) {
      return `${priceFrom} р. - ${priceTo} р.`;
    }
    if (priceFrom) {
      return `от ${priceFrom} р.`;
    }
    if (priceTo) {
      return `до ${priceTo} р.`;
    }

    return 'Цена';
  };
  const getAreaLabel = () => {
    const areaFrom = method.getValues('areaFrom');
    const areaTo = method.getValues('areaTo');
    if (areaFrom && areaTo) {
      return `${areaFrom} м2. - ${areaTo} м2.`;
    }
    if (areaFrom) {
      return `от ${areaFrom} м2.`;
    }
    if (areaTo) {
      return `до ${areaTo} м2.`;
    }

    return 'Площадь';
  };
  const getRoomsLabel = () => {
    const roomsCount = method.getValues('roomsCount');
    const isStudio = method.getValues('isStudio');
    if (roomsCount.length > 0) {
      return isStudio
        ? 'Студия, ' + roomsCount.join(', ')
        : roomsCount.join(', ');
    }
    if (isStudio) {
      return 'Студия';
    }

    return 'Комнатность';
  };
  const _reset = () => {
    method.reset(defaultFilter);
  };
  method.watch('subTypeEstate');
  method.watch('priceFrom');
  method.watch('priceTo');
  method.watch('areaFrom');
  method.watch('areaTo');
  method.watch('roomsCount');
  method.watch('isStudio');
  return (
    <FormProvider {...method}>
      <S.FilterForm onSubmit={method.handleSubmit(onSubmit)}>
        <S.FilterFormInputs $columns={getColumns()}>
          <InputButton label={getTypeLabel()}>
            <FilterFormType filterActive={filterActive} />
          </InputButton>
          {(method.getValues('subTypeEstate') === 'flat' ||
            method.getValues('subTypeEstate') === 'newBuildingFlat') && (
            <InputButton label={getRoomsLabel()}>
              <FilterFormRooms />
            </InputButton>
          )}
          <InputButton label={getPriceLabel()}>
            <FilterFormPrice />
          </InputButton>
          {(method.getValues('typeEstate') === 'business' ||
            method.getValues('subTypeEstate') === 'garage') && (
            <InputButton label={getAreaLabel()}>
              <FilterFormArea />
            </InputButton>
          )}
          <Controller
            name='address'
            control={method.control}
            render={({ field }) => (
              <Dadata onChange={field.onChange} value={field.value} />
            )}
          />
        </S.FilterFormInputs>
        <S.FileterButtonsWrap>
          <div>
            {method.formState.isDirty ? (
              <Button type='reset' onClick={_reset} variant='text'>
                Сбросить
              </Button>
            ) : (
              <div style={{ height: 48 }}></div>
            )}
          </div>
          <S.FileterButtonsWrapRight>
            <Button fullWidth variant='outline'>
              На карте
            </Button>
            <Button fullWidth type='submit'>
              Найти
            </Button>
          </S.FileterButtonsWrapRight>
        </S.FileterButtonsWrap>
      </S.FilterForm>
    </FormProvider>
  );
};

export default FilterForm;
