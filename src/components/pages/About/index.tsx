import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../core/hooks/storeHook';
import { getAboutPage } from '../../../core/store/slices/aboutSlice';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import AboutMission from '../../simple/AboutMission';
import AboutCompany from '../../simple/AboutCompany';
import AboutFlamp from '../../simple/AboutFlamp';
import AboutCheff from '../../simple/AboutCheff';
import AboutDiploms from '../../smart/AboutDiploms';
import AboutLive from '../../smart/AboutLive';
const About = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getAboutData();
  }, []);
  const getAboutData = () => {
    dispatch(getAboutPage());
  };
  return (
    <S.AboutPage>
      <CenterContainer>
        <PaddingSide>
          <AboutMission />
        </PaddingSide>
      </CenterContainer>
      <AboutCompany />
      <CenterContainer>
        <PaddingSide>
          <AboutFlamp />
          <AboutCheff />
          <AboutDiploms />
          <AboutLive />
        </PaddingSide>
      </CenterContainer>
    </S.AboutPage>
  );
};

export default About;
