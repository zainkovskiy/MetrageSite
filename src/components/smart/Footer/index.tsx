import React from 'react';
import * as S from './style';
import HorizontLine from '../../simple/HorizontLine';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import FlexBox from '../../ui/FlexBox';
import Text from '../../ui/Text';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { ReactComponent as VK } from '../../../assets/images/VK.svg';
import { ReactComponent as YouTube } from '../../../assets/images/youtube.svg';
import { ReactComponent as Telegram } from '../../../assets/images/telegram.svg';
import dzenUrl from '../../../assets/images/dzen.svg';
import ButtonLink from '../../ui/ButtonLink';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../../core/hooks/windowSize';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { regExpMail } from '../../../core/constants/regExp';
import { subscribe } from '../../../core/api/api';
import { IEmailData } from '../../../core/models/main';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import {
  openLetterCheff,
  openSnackBar,
} from '../../../core/store/slices/MainInfoSlice';

const Footer = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, watch, getValues, control, reset } = useForm({
    defaultValues: { email: '' },
  });
  const windowSize = useWindowSize();
  const { region } = useAppSelector((state) => state.main);
  const onSubmit: SubmitHandler<IEmailData> = (data) => {
    subscribe({
      location: region,
      URL: window.location.href,
      formData: data,
    }).then((answer) => {
      if (answer) {
        dispatch(openSnackBar());
        reset();
      }
    });
  };
  const handleClickLetter = () => {
    dispatch(openLetterCheff());
  };
  watch('email');

  return (
    <CenterContainer>
      <PaddingSide>
        <HorizontLine />
        <S.Footer>
          <S.FooterWrap>
            <S.FooterLinksWrap>
              <FlexBox gap='1rem' column>
                <ButtonLink as={Link} to='/buy' size={16} label='Купить' />
                {/* <ButtonLink as={Link} to='/sell' size={16} label='Продать' /> */}
                {/* <ButtonLink
                  as={Link}
                  to='/mortgage'
                  size={16}
                  label='Ипотека'
                /> */}
                <ButtonLink
                  as={Link}
                  to='/rieltors'
                  size={16}
                  label='Наши специалисты'
                />
              </FlexBox>
              <FlexBox gap='1rem' column>
                <ButtonLink
                  as={Link}
                  to='/about'
                  size={16}
                  label='О компании'
                />
                <ButtonLink
                  as={Link}
                  to='/contacts'
                  size={16}
                  label='Контакты'
                />
              </FlexBox>
              <FlexBox gap='1rem' column>
                {/* <ButtonLink
                  as={Link}
                  to='/services'
                  size={16}
                  label='Сервисы'
                />
                <ButtonLink as={Link} to='/help' size={16} label='Помощь' />
                <ButtonLink as={Link} to='/journal' size={16} label='Журнал' /> */}
                <ButtonLink
                  as={Link}
                  to='/articles/'
                  size={16}
                  label='Статьи'
                />
              </FlexBox>
            </S.FooterLinksWrap>
            <FlexBox column gap='1rem'>
              <S.FooterSubscribe onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder='Эл. почта'
                      fullWidth
                      small={windowSize > 768}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                <Button
                  fullWidth
                  small={windowSize > 768}
                  disabled={!regExpMail.test(getValues('email'))}
                  type='submit'
                >
                  подписаться
                </Button>
              </S.FooterSubscribe>
              <Text size={12} color='greyDark'>
                Продолжая использовать наш сайт, вы даете согласие на обработку
                файлов cookies и других пользовательских данных, в соответствии
                с
                <ButtonLink
                  size={12}
                  color='greyDark'
                  label='Правилами обработки персональных данных'
                  as={Link}
                  to='/privacy-policy'
                  underline
                />
              </Text>
            </FlexBox>
            <FlexBox
              gap='1rem'
              column
              aItems={windowSize > 768 ? 'flex-end' : 'flex-start'}
            >
              <FlexBox
                column
                aItems={windowSize > 768 ? 'flex-end' : 'flex-start'}
                itemScope
                itemType='http://schema.org/Organization'
              >
                <ButtonLink
                  itemProp='telephone'
                  size={16}
                  color='primaryLite'
                  label='8-800-222-85-28'
                  href='tel:8-800-222-85-28'
                />
                <ButtonLink
                  itemProp='email'
                  size={16}
                  color='primaryLite'
                  label='Dunauskas.o@metragegroup.com'
                  href='mailto:Dunauskas.o@metragegroup.com'
                />
              </FlexBox>
              <ButtonLink
                size={16}
                color='primaryLite'
                label='Письмо директору'
                onClick={handleClickLetter}
              />
              <FlexBox column gap='1rem'>
                <Text size={16}>Мы с соц.сетях:</Text>
                <FlexBox column gap='0.3rem'>
                  <ButtonLink
                    size={16}
                    color='primaryLite'
                    label='Вконтакте'
                    href='https://vk.com/metragegroup'
                    icon={<VK />}
                    target='_blank'
                  />
                  <ButtonLink
                    size={16}
                    color='primaryLite'
                    label='Telegram'
                    href='https://t.me/s/Metragegroup'
                    icon={<Telegram />}
                    target='_blank'
                  />
                  <ButtonLink
                    size={16}
                    color='primaryLite'
                    label='Youtube'
                    href='https://www.youtube.com/channel/UCMDrKciab21zLfxUXzBX_6w'
                    icon={<YouTube />}
                    target='_blank'
                  />
                  <ButtonLink
                    size={16}
                    color='primaryLite'
                    label='Дзен'
                    href='https://dzen.ru/id/66f529b9874b806732645965'
                    icon={<S.IconDzen src={dzenUrl} />}
                    target='_blank'
                  />
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </S.FooterWrap>
          <FlexBox aItems='center' jContent='space-between'>
            {windowSize > 768 && <Logo />}
            <Text>© ООО «Вдоме», 2024</Text>
          </FlexBox>
        </S.Footer>
      </PaddingSide>
    </CenterContainer>
  );
};

export default Footer;
