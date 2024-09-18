import React, { useEffect, useState } from 'react';
import * as S from './style';
import {
  IAppartmentDetail,
  IAppartmentItems,
} from '../../../core/models/newBuildings';
import { AnimatePresence } from 'framer-motion';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';
import { getNewBuildingsAppartment } from '../../../core/api/api';
import { useWindowSize } from '../../../core/hooks/windowSize';
import ButtonLink from '../../ui/ButtonLink';
import { useFreezeBody, useUnfreezeBody } from '../../../core/hooks/freezeBody';

const AccordeonNewBuildings = (props: IAppartmentItems) => {
  const windowSize = useWindowSize();
  const { name, priceFrom, areaFrom, countItems } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IAppartmentDetail[] | null>(null);
  const [loading, setLoading] = useState(true);
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
          console.log(data);
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
                  <S.AccordeonNewBuildingsContextItem key={item.UID}>
                    <img src={item.image} style={{ height: 40 }} />
                    <Text size={16}>{item.floor}</Text>
                    <Text size={16}>{item.price}</Text>
                    <Text size={16}>{item.areaTotal}</Text>
                  </S.AccordeonNewBuildingsContextItem>
                ))
              )}
            </S.AccordeonNewBuildingsContextItems>
          </S.AccordeonNewBuildingsContext>
        )}
      </AnimatePresence>
    </S.AccordeonNewBuildings>
  );
};

export default AccordeonNewBuildings;
