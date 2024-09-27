import React from 'react';
import * as S from './style';
import PaddingSide from '../../containers/PaddingSide';
import CenterContainer from '../../containers/CenterContainer';
import Text from '../../ui/Text';
import { useAppSelector } from '../../../core/hooks/storeHook';

const AboutCompany = () => {
  const { data } = useAppSelector((state) => state.about);
  return (
    <S.AboutCompany>
      <CenterContainer>
        <PaddingSide>
          <S.AboutCompanyBlocks>
            <S.AboutCompanyBlock>
              <Text sizeStr='clamp(26px, 4vw, 44px)' color='primary'>
                {data?.countDepartmants} филиалов
              </Text>
              <Text size={16}>в Новосибирске и в Москве</Text>
            </S.AboutCompanyBlock>
            <S.AboutCompanyBlock>
              <Text sizeStr='clamp(26px, 4vw, 44px)' color='primary'>
                {data?.countEmploees} сотрудников
              </Text>
              <Text size={16}>помогают вам с недвижимостью</Text>
            </S.AboutCompanyBlock>
            <S.AboutCompanyBlock>
              <Text sizeStr='clamp(26px, 4vw, 44px)' color='primary'>
                От {data?.countDealDays} дней
              </Text>
              <Text size={16}>срок закрытия сделки</Text>
            </S.AboutCompanyBlock>
          </S.AboutCompanyBlocks>
        </PaddingSide>
      </CenterContainer>
      <S.AboutCompanyImage />
    </S.AboutCompany>
  );
};

export default AboutCompany;
