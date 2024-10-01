import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import Button from '../../ui/Button';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import Input from '../../ui/Input';
import { IFormLetterCheff } from '../../../core/models/main';
import FlexBox from '../../ui/FlexBox';
import TextArea from '../../ui/TextArea';
import {
  closeLetterCheff,
  openSnackBar,
} from '../../../core/store/slices/MainInfoSlice';
import { sendLetterCheff } from '../../../core/api/api';

const LetterCheff = () => {
  const dispatch = useAppDispatch();
  const { region } = useAppSelector((state) => state.main);
  const { control, handleSubmit, watch, getValues, reset } =
    useForm<IFormLetterCheff>();
  const onSubmit: SubmitHandler<IFormLetterCheff> = (data) => {
    const raw = {
      URL: window.location.href,
      location: region,
      formData: data,
    };
    sendLetterCheff(raw).then(() => {
      dispatch(openSnackBar());
    });
    handleClose();
  };
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
  const handleClose = () => {
    dispatch(closeLetterCheff());
  };
  const isDisabledButton = () => {
    if (!getValues('name') || getValues('name').length === 0) {
      return true;
    }
    if (!getValues('phone') || getValues('phone').length < 18) {
      return true;
    }
    if (!getValues('text') || getValues('text').length === 0) {
      return true;
    }
    return false;
  };
  watch('name');
  watch('phone');
  watch('text');
  return (
    <S.LetterCheff onSubmit={handleSubmit(onSubmit)}>
      <Text sizeStr='clamp(26px, 4vw, 44px)'>Письмо директору</Text>
      <FlexBox column gap='1rem'>
        <S.LetterCheffInputsWrap>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Input
                fullWidth
                value={field.value || ''}
                placeholder='Ваше имя'
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <Input
                fullWidth
                value={field.value || ''}
                onChange={(e) => {
                  field.onChange(validateValuePhone(e.target.value));
                }}
                placeholder='+7 ___ ___-__-__'
                maxLength={18}
              />
            )}
          />
        </S.LetterCheffInputsWrap>
        <Controller
          name='text'
          control={control}
          render={({ field }) => (
            <TextArea
              rows={12}
              placeholder='Текст вашего сообщения'
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FlexBox>
      <S.LetterCheffButtonWrap>
        <Button fullWidth type='submit' disabled={isDisabledButton()}>
          отправить
        </Button>
        <Text size={12} color='greyDark'>
          Нажимая кнопку «Отправить», вы соглашаетесь с{' '}
          <ButtonLink
            size={12}
            color='greyDark'
            label='Политикой обработки персональных данных'
            as={Link}
            to='/privacy-policy'
            underline
          />
        </Text>
      </S.LetterCheffButtonWrap>
      <S.IconClose onClick={handleClose} />
    </S.LetterCheff>
  );
};

export default LetterCheff;
