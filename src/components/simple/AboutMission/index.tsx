import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';

const AboutMission = () => {
  return (
    <S.AboutMission>
      <div>
        <Text sizeStr='clamp(26px, 4vw, 44px)'>
          Решаем любые задачи с недвижимостью с{' '}
        </Text>
        <Text sizeStr='clamp(26px, 4vw, 44px)' color='primary'>
          {' '}
          2019 года
        </Text>
      </div>
      <Text sizeStr='clamp(18px, 3vw, 24px)'>
        Уверенно ведем клиентов к положительному результату в каждой сделке.
        Cтановимся лучше для вас — и получаем искреннюю благодарность и высокую
        оценку нашей работы.
      </Text>
    </S.AboutMission>
  );
};

export default AboutMission;
