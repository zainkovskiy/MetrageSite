import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import Button from '../../ui/Button';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import { IFormNamePhoneData } from '../../../core/models/main';
import { sendNamePhoneForm } from '../../../core/api/api';
import { useAppSelector } from '../../../core/hooks/storeHook';
import { IFormNamePhoneProps } from './type';

const FormNamePhone = (props: IFormNamePhoneProps) => {
  const { name, text, buttonText } = props;
  const { region } = useAppSelector((state) => state.main);
  const { control, handleSubmit, watch, getValues, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
  });
  const onSubmit: SubmitHandler<IFormNamePhoneData> = (data) => {
    sendNamePhoneForm({
      URL: window.location.href,
      location: region,
      formData: data,
    }).then((answer) => {
      if (answer) {
        reset();
      }
    });
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
  const isDisabledButton = () => {
    if (getValues('name').length > 0 && getValues('phone').length === 18) {
      return false;
    }
    return true;
  };
  watch('name');
  watch('phone');
  return (
    <S.FormNamePhone>
      <Text size={20}>{text}</Text>
      <S.InputsWrap onSubmit={handleSubmit(onSubmit)}>
        {name && (
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Input
                fullWidth
                value={field.value}
                placeholder='Ваше имя'
                onChange={field.onChange}
              />
            )}
          />
        )}
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
        <S.ButtonWrapper>
          <Button fullWidth disabled={isDisabledButton()} type='submit'>
            {buttonText || 'отправить'}
          </Button>
          <S.ButtonTextWrapper>
            <Text size={12} color='greyDark'>
              Нажимая кнопку «Отправить», вы соглашаетесь с
              <ButtonLink
                size={12}
                color='greyDark'
                label=' Политикой обработки персональных данных'
                as={Link}
                to='/privacy-policy'
                underline
              />
            </Text>
          </S.ButtonTextWrapper>
        </S.ButtonWrapper>
      </S.InputsWrap>
    </S.FormNamePhone>
  );
};

export default FormNamePhone;
