import React from 'react';
import * as S from './style';
import Text from '../../ui/Text';
import MainProfitCard from '../MainProfitCard';
import { useNavigate } from 'react-router-dom';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
const imgLink =
  'https://metragegroup.com/_ipx/f_webp&q_90/https://api.metragegroup.com/storage/files/117e245586fc6c38981f5eb7227b0890.png';

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
        <S.MainProfitImg src={imgLink} />
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
