import React, { useEffect, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import Text from '../../ui/Text';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import { getRieltors } from '../../../core/store/slices/rieltorsSlice';
import MainRealtorCard from '../../smart/MainRealtorCard';
import LogoWithLine from '../../simple/LogoWithLine';
import InfoCard from '../../simple/InfoCard';
import FormNamePhone from '../../smart/FormNamePhone';
import FormNamePhoneSmall from '../../smart/FormNamePhoneSmall';
import InputSearch from '../../ui/InputSearch';
import { findRealtors } from '../../../core/api/api';
import { IRealtorsSearch } from '../../../core/models/main';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import Pagination from '../../ui/Pagination';

const RieltorsPage = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.rieltors);
  const { region } = useAppSelector((state) => state.main);
  const [rieltorsList, setRieltorsList] = useState<IRealtorsSearch[]>([]);
  useEffect(() => {
    getRieltorsList();
  }, [region]);
  const getRieltorsList = () => {
    dispatch(getRieltors(data?.curPage || 1));
  };
  const _search = (value: string) => {
    findRealtors({
      location: region,
      request: value,
    }).then((rieltors) => {
      if (rieltors) {
        setRieltorsList(rieltors);
        return;
      }
      setRieltorsList([]);
    });
  };
  const hanleChangePage = (page: number) => {
    dispatch(getRieltors(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <CenterContainer>
      <PaddingSide>
        <S.RieltorsPageTop>
          <S.RieltorsPageTitle>
            <Text sizeStr='clamp(32px, 5vw, 56px)'>Наши специалисты</Text>
            <S.RieltorsPageSearchWrap>
              <InputSearch
                fullWidth
                placeholder='Поиск по ФИО'
                onChange={_search}
                list={
                  rieltorsList.length > 0 ? (
                    <>
                      <Text size={20} bold>
                        Результаты поиска
                      </Text>
                      {rieltorsList.map((rieltor) => (
                        <ButtonLink
                          label={`${rieltor.firstName} ${rieltor.lastName}`}
                          key={rieltor.UID}
                          as={Link}
                          to={`${rieltor.UID}`}
                          size={16}
                        />
                      ))}
                    </>
                  ) : (
                    <Text>Совпадений не найдено</Text>
                  )
                }
              />
            </S.RieltorsPageSearchWrap>
          </S.RieltorsPageTitle>
        </S.RieltorsPageTop>
        <S.RieltorsPage>
          <S.RieltorsPageRigth>
            <S.RieltorsPageCards>
              {data?.items &&
                data.items.length > 0 &&
                data.items.map((realtor) => (
                  <MainRealtorCard key={realtor.UID} {...realtor} />
                ))}
            </S.RieltorsPageCards>
            {data?.pagesCount && (
              <S.RieltorsPagePagination>
                <Pagination
                  count={data.pagesCount}
                  onChange={hanleChangePage}
                  page={data.curPage || 1}
                />
              </S.RieltorsPagePagination>
            )}
            <S.RieltorsPageText>
              <LogoWithLine />
              <S.RieltorsPageTextWrap>
                <Text size={16}>
                  В команде Metrage собрались риелторы, которые искренне
                  увлечены своей работой. Они достаточно подкованы в смежных
                  сферах, чтобы отвечать на любые ваши вопросы в ходе сделки,
                  например, про налоги и юридические нюансы. Берутся за любые
                  задачи с недвижимостью и решают их быстро и комфортно для вас.
                </Text>
              </S.RieltorsPageTextWrap>
            </S.RieltorsPageText>
            <S.RieltorsPageInfoText>
              <Text sizeStr='clamp(26px, 4vw, 44px)'>
                С риелтором выгодно и безопасно
              </Text>
            </S.RieltorsPageInfoText>
            <S.RieltorsPageInfoCards>
              <InfoCard
                icon='cross'
                title='Точный и быстрый подбор вариантов'
                text='Риелтор видит неочевидные плюсы и минусы каждого объекта. Помогает подобрать жилье, максимально соответствующее вашим пожеланиям.'
              />
              <InfoCard
                icon='around'
                title='Комфортный формат работы'
                text='Консультируем онлайн и оффлайн, выезжаем к вам на дом или встречаем у себя в офисе. Активно работаем с клиентами из других городов.'
              />
              <InfoCard
                icon='arrow'
                title='Особенные предложения'
                text='Риелторы регулярно посещают презентации застройщиков. Они в курсе всех выгодных предложений, первыми узнают о запуске новых и перспективных объектов'
              />
              <InfoCard
                icon='semicolon'
                title='Надежная сделка'
                text='Юрист проверит все документы по сделке. Мы бесплатно выдаем базовый сертификат, гарантирующий чистоту сделки.'
              />
            </S.RieltorsPageInfoCards>
          </S.RieltorsPageRigth>
          <div>
            <S.RieltorsPageFixForm>
              <FormNamePhoneSmall text='Поможем с выбором риелтора' back name />
            </S.RieltorsPageFixForm>
          </div>
        </S.RieltorsPage>
        <LogoWithLine fullFill />
        <S.RieltorsPageBid>
          <FormNamePhone text='Оставьте заявку, мы поможем подобрать специалиста' />
        </S.RieltorsPageBid>
      </PaddingSide>
    </CenterContainer>
  );
};

export default RieltorsPage;
