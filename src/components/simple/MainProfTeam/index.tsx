import React from 'react';
import * as S from './styled';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
const MainProfTeam = () => {
  return (
    <S.MainProfTeam>
      <S.MainProfTeamWrap>
        <Text size={28} color='white'>
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
          />
        </S.MainProfTeamLink>
      </S.MainProfTeamWrap>
      <S.MainProfTeamImage src='https://metragegroup.com/_ipx/f_webp&q_80/https://api.metragegroup.com/storage/files/226c563b9d35ef2e1a6b29514b3acbb2.png' />
    </S.MainProfTeam>
  );
};

export default MainProfTeam;
