import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import {
  getNewbuildingsList,
  setStateFilter,
} from '../../../core/store/slices/newBuildingsSlice';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import * as S from './style';
import Text from '../../ui/Text';
import { Outlet, useLocation } from 'react-router-dom';
import FlexBox from '../../ui/FlexBox';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import { ContextOtletType } from './type';

const NewBuildingsPage = () => {
  const firstMount = useRef(true);
  const dispatch = useAppDispatch();
  const { stateFilter, bBox, data } = useAppSelector(
    (state) => state.newbuildings
  );
  const { region } = useAppSelector((state) => state.main);
  const location = useLocation();
  const regExp = new RegExp('map', 'i');
  const isMap = regExp.test(location.pathname);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    getList();
  }, [stateFilter, bBox]);
  const getList = (page?: number) => {
    dispatch(
      getNewbuildingsList({
        state: stateFilter,
        location: region,
        page: page || data?.curPage || 1,
        isMap: isMap,
        bBox: bBox,
      })
    );
  };
  const setNewStateFilter = (newStateFilter: string) => {
    dispatch(setStateFilter(newStateFilter));
  };
  return (
    <>
      <CenterContainer>
        <PaddingSide>
          <S.NewBuildingsPageTop>
            <ToggleButtonGroup
              onChange={(value) =>
                typeof value === 'string' && setNewStateFilter(value)
              }
              value={stateFilter}
              wrap
            >
              <ToggleButton value='all' label='Все' />
              <ToggleButton value='ready' label='Со сданными корпусами' />
              <ToggleButton value='onProgress' label='В процессе' />
            </ToggleButtonGroup>
            <FlexBox jContent='space-between' wrap gap='0.5rem'>
              <Text sizeStr='clamp(32px, 5vw, 56px)'>Новостройки в ЖК</Text>
              <ButtonLink
                label={isMap ? 'Списком' : 'На карте'}
                as={Link}
                to={isMap ? '/newbuildings' : 'map'}
                color='primary'
              />
            </FlexBox>
          </S.NewBuildingsPageTop>
        </PaddingSide>
      </CenterContainer>
      <Outlet context={{ getList } satisfies ContextOtletType} />
    </>
  );
};

export default NewBuildingsPage;
