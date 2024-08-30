import React, { useEffect } from 'react';
import * as S from './style';
import { IWindowLocationMenuProps } from './type';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import { useAppDispatch } from '../../../core/hooks/storeHook';
import { setRegion } from '../../../core/store/slices/MainInfoSlice';
import { useFreezeBody, useUnfreezeBody } from '../../../core/hooks/freezeBody';

const WindowLocationMenu = (props: IWindowLocationMenuProps) => {
  const { onClick } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    useFreezeBody();
    return () => {
      useUnfreezeBody();
    };
  }, []);
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const id = e.currentTarget.id;
    dispatch(setRegion(id));
    onClick();
  };
  return (
    <S.WindowLocationMenuWrap>
      <S.WindowLocationMenu>
        <S.CloseButton onClick={onClick} />
        <FlexBox column gap='1rem'>
          <Text size={24} bold>
            Выбор города
          </Text>
          <FlexBox column gap='0.5rem'>
            <Text
              size={16}
              id='msk'
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            >
              Москва
            </Text>
            <Text
              size={16}
              id='nsk'
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            >
              Новосибирск
            </Text>
          </FlexBox>
        </FlexBox>
      </S.WindowLocationMenu>
    </S.WindowLocationMenuWrap>
  );
};

export default WindowLocationMenu;
