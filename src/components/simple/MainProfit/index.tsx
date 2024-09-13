import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import MainProfitCard from '../MainProfitCard';
import { useNavigate } from 'react-router-dom';
import CenterContainer from '../../containers/CenterContainer';

const MainProfit = () => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elem = e.target as HTMLInputElement;
    const id = elem.id;
    if (id) {
      navigate(`/${id}`);
    }
  };
  return (
    <S.MainProfit>
      <S.MainProfitImgWrap>
        <S.MainProfitImg src={'https://metragegroup.com/resources/two.webp'} />
        <S.MainProfitTitleWrap>
          <Text sizeStr='clamp(26px, 4vw, 44px)' color='white'>
            С METRAGE выгодно
          </Text>
        </S.MainProfitTitleWrap>
      </S.MainProfitImgWrap>
      <CenterContainer>
        <S.MainProfitCardsWrap>
          <S.MainProfitCards>
            <MainProfitCard
              label='Поиск, ипотека, регистрация сделки - все в одном месте'
              linkTitle='Каталог квартир'
              id='buy'
              onClick={handleClick}
            />
            <S.VerticalLine />
            <MainProfitCard
              label='Специальные предложения от банков и застройщиков'
              // linkTitle='Подробности и запись'
              id='rieltors'
              onClick={handleClick}
            />
            <S.VerticalLine />
            <MainProfitCard label='Бесплатное базовое страхование сделки' />
            <S.VerticalLine />
            <MainProfitCard label='Первыми узнаем о новых объектах, даем аналитику для инвесторов' />
          </S.MainProfitCards>
        </S.MainProfitCardsWrap>
      </CenterContainer>
    </S.MainProfit>
  );
};

export default MainProfit;
