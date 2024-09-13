import React from 'react';
import * as S from './styled';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
const MainProfTeam = () => {
  return (
    <S.MainProfTeam>
      <S.MainProfTeamWrap>
        <Text sizeStr='clamp(26px, 4vw, 44px)' color='white'>
          Профессиональная команда
        </Text>
        <Text size={16} color='white'>
          Риелторы, юристы, ипотечные брокеры помогут провести сделку быстро и
          безопасно
        </Text>
        <S.MainProfTeamLink>
          <ButtonLink
            uppercase
            color='white'
            label='познакомиться со специалистами'
            bold
            arrow='right'
            as={Link}
            to='/rieltors'
          />
        </S.MainProfTeamLink>
      </S.MainProfTeamWrap>
      <S.MainProfTeamImage src='https://metragegroup.com/resources/all.webp' />
    </S.MainProfTeam>
  );
};

export default MainProfTeam;
