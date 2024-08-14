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
import MainSignCconsultation from '../../smart/MainSignCconsultation';

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
          <MainSignCconsultation />
        </PaddingSide>
      </CenterContainer>
    </>
  );
};

export default MainPage;
