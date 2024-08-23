import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { useAppSelector } from '../../../core/hooks/storeHook';
import NewBuildingCard from '../NewBuildingCard';

const MainNewBuild = () => {
  const { newBuildings } = useAppSelector((state) => state.main);
  return (
    <S.MainNewBuild>
      <S.MainNewBuildText>
        <Text sizeStr='clamp(26px, 4vw, 44px)'>
          Новостройки и жилые комплексы
        </Text>
        <ButtonLink
          size={16}
          label='Все новостройки'
          color='primaryDark'
          uppercase
          bold
          arrow='right'
        />
      </S.MainNewBuildText>
      <S.MainNewBuildCards>
        {newBuildings.map((building) => (
          <NewBuildingCard key={building.UID} {...building} />
        ))}
      </S.MainNewBuildCards>
    </S.MainNewBuild>
  );
};

export default MainNewBuild;
