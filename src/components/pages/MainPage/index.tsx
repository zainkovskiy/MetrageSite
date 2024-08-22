import React from 'react';
import PaddingSide from '../../containers/PaddingSide';
import MainBackTop from '../../simple/MainBackTop';
import CenterContainer from '../../containers/CenterContainer';
import Filter from '../../smart/Filter';
import MainProfTeam from '../../simple/MainProfTeam';
import MainCredo from '../../simple/MainCredo';
import MainNewBuild from '../../smart/MainNewBuild';
import MainRealtors from '../../smart/MainRealtors';
import MainProfit from '../../simple/MainProfit';
import MainSignConsultation from '../../smart/MainSignConsultation';
import MainInfo from '../../simple/MainInfo';

const MainPage = () => {
  return (
    <>
      <MainBackTop>
        <Filter />
      </MainBackTop>
      <CenterContainer>
        <PaddingSide>
          <MainProfTeam />
          <MainCredo />
          <MainNewBuild />
          <MainRealtors />
        </PaddingSide>
      </CenterContainer>
      <MainProfit />
      <CenterContainer>
        <PaddingSide>
          <MainSignConsultation />
          <MainInfo />
        </PaddingSide>
      </CenterContainer>
    </>
  );
};

export default MainPage;
