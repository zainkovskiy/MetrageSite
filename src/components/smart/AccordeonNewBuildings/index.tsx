import React, { useEffect, useState } from 'react';
import * as S from './style';
import {
  IAppartmentDetail,
  IAppartmentItems,
} from '../../../core/models/newBuildings';
import { AnimatePresence } from 'framer-motion';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import {
  getNewBuildingsAppartment,
  takeNewBuilding,
} from '../../../core/api/api';
import { useWindowSize } from '../../../core/hooks/windowSize';
import ButtonLink from '../../ui/ButtonLink';
import { useFreezeBody, useUnfreezeBody } from '../../../core/hooks/freezeBody';
import WindowDialog from '../../ui/WindowDialog';
import { ReactComponent as Arrow } from '../../../assets/images/arrowBoldRight.svg';
import FormNamePhoneSmall from '../FormNamePhoneSmall';
import { ISetForm } from '../../../core/models/api';
import { IFormNamePhoneData } from '../../../core/models/main';
import { openSnackBar } from '../../../core/store/slices/MainInfoSlice';
import { useAppDispatch } from '../../../core/hooks/storeHook';

const AccordeonNewBuildings = (props: IAppartmentItems) => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();
  const { name, priceFrom, areaFrom, countItems } = props;
  const [open, setOpen] = useState(false);
  const [take, setTake] = useState<string | null>(null);
  const [data, setData] = useState<IAppartmentDetail[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    if (open && windowSize <= 768) {
      useFreezeBody();
    }
    if (!open && windowSize <= 768) {
      useUnfreezeBody();
    }
    if (countItems === '0') {
      return;
    }
    if (data) {
      return;
    }
    if (open) {
      getNewBuildingsAppartment(props)
        .then((data) => {
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [open]);
  const toggleOpne = () => {
    setOpen(!open);
  };
  const openFullImage = (image: string) => {
    setImage(image);
  };
  const closeFullImage = () => {
    setImage(null);
  };
  const openTake = (erid: string) => {
    setTake(erid);
  };
  const closeTake = () => {
    setTake(null);
  };
  const takeObject = (raw: ISetForm<IFormNamePhoneData>) => {
    if (take) {
      takeNewBuilding({
        ...raw,
        formData: { ...raw.formData, erid: take },
      }).then(() => {
        dispatch(openSnackBar());
      });
      closeTake();
    }
  };
  return (
    <S.AccordeonNewBuildings>
      <S.AccordeonNewBuildingsHeader onClick={toggleOpne} $isOpen={open}>
        <Text bold>{name}</Text>
        <Text>{priceFrom}</Text>
        <Text nowrap>{areaFrom}</Text>
        <FlexBox gap='0.5rem' jContent='space-between'>
          <Text color='primary' nowrap>
            {countItems} квартир
          </Text>
          <S.ArrowAmimate
            animate={open ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <S.Arrow />
          </S.ArrowAmimate>
        </FlexBox>
      </S.AccordeonNewBuildingsHeader>
      <AnimatePresence>
        {open && (
          <S.AccordeonNewBuildingsContext
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            layout
          >
            {windowSize <= 768 && (
              <S.BackWrap>
                <ButtonLink
                  onClick={toggleOpne}
                  label='Назад'
                  arrow='left'
                  color='primary'
                />
              </S.BackWrap>
            )}
            <S.AccordeonNewBuildingsContextItems>
              {loading ? (
                <Text>loading...</Text>
              ) : (
                data &&
                data.map((item) => (
                  <S.AccordeonNewBuildingsContextItemWrap>
                    <S.AccordeonNewBuildingsContextItem key={item.UID}>
                      <S.AccordeonNewBuildingsImg
                        src={item.image}
                        onClick={() => openFullImage(item.image)}
                      />
                      <Text size={16}>{item.floor}</Text>
                      <Text size={16}>{item.price}</Text>
                      <Text size={16}>{item.areaTotal}</Text>
                    </S.AccordeonNewBuildingsContextItem>
                    <S.ArrowButton onClick={() => openTake(item.erid)}>
                      <Arrow />
                    </S.ArrowButton>
                  </S.AccordeonNewBuildingsContextItemWrap>
                ))
              )}
            </S.AccordeonNewBuildingsContextItems>
          </S.AccordeonNewBuildingsContext>
        )}
      </AnimatePresence>
      <WindowDialog open={Boolean(image)}>
        <FlexBox column aItems='flex-end'>
          <S.IconClose onClick={closeFullImage} />
          <S.AccordeonNewBuildingsFullImg src={image || ''} />
        </FlexBox>
      </WindowDialog>
      <WindowDialog open={Boolean(take)}>
        <FlexBox column aItems='flex-end'>
          <S.IconClose onClick={closeTake} />
          <FormNamePhoneSmall
            text='Оставьте ваш номер, и мы вам перезвоним'
            onSubmitRaw={takeObject}
            back
          />
        </FlexBox>
      </WindowDialog>
    </S.AccordeonNewBuildings>
  );
};

export default AccordeonNewBuildings;
