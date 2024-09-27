import React, { useState } from 'react';
import * as S from './style';
import { useAppSelector } from '../../../core/hooks/storeHook';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import WindowDialog from '../../ui/WindowDialog';
import FlexBox from '../../ui/FlexBox';

const AboutDiploms = () => {
  const { data } = useAppSelector((state) => state.about);
  const [open, setOpen] = useState(false);
  const [diplom, setDiplom] = useState<string | null>(null);
  const openDiplom = (image: string) => {
    setDiplom(image);
  };
  const closeDiplom = () => {
    setDiplom(null);
  };
  const openWindow = () => {
    setOpen(true);
  };
  const closeWindow = () => {
    setOpen(false);
  };
  return (
    <>
      {data?.diploms && data?.diploms.length > 0 && (
        <S.AboutDiploms>
          <S.AboutDiplomsText>
            <Text sizeStr='clamp(26px, 4vw, 44px)'>
              Золотой партнер Сбербанка
            </Text>
            <Text sizeStr='clamp(18px, 3vw, 24px)'>
              Также среди{' '}
              <ButtonLink
                sizeStr='clamp(18px, 3vw, 24px)'
                color='primary'
                label='наших партнеров'
                onClick={openWindow}
              />
              : <br />
              {data.partners.countBanks} ведущих банков страны,{' '}
              {data.partners.countBrokers} крупные страховые компании, компании
              по оценке недвижимости
            </Text>
          </S.AboutDiplomsText>
          <S.AboutDiplomsItems>
            {data?.diploms.map((diplom) => (
              <S.AboutDiplomsItem
                src={diplom.URL}
                key={diplom.UID}
                onClick={() => openDiplom(diplom.URL)}
              />
            ))}
          </S.AboutDiplomsItems>
          <WindowDialog open={Boolean(diplom)} black>
            {diplom && (
              <S.WindowDialog>
                <S.ImageFull src={diplom} />
                <S.IconClose onClick={closeDiplom} />
              </S.WindowDialog>
            )}
          </WindowDialog>
          <WindowDialog open={open} black>
            <S.WindowDialog>
              <S.IconClose onClick={closeWindow} $inside />
              <S.WindowPartners>
                <Text sizeStr='clamp(26px, 4vw, 44px)'>Наши парнеры</Text>
                {data.partners.banks.length > 0 && (
                  <S.WindowPartnersWrap>
                    <Text sizeStr='clamp(18px, 3vw, 24px)' color='primary'>
                      Банки
                    </Text>
                    <S.WindowPartnersItems>
                      {data.partners.banks.map((bank) => (
                        <ButtonLink
                          key={bank.UID}
                          label={bank.title}
                          href={bank.URL}
                          target='_blank'
                        />
                      ))}
                    </S.WindowPartnersItems>
                  </S.WindowPartnersWrap>
                )}
                {data.partners.brokers.length > 0 && (
                  <S.WindowPartnersWrap>
                    <Text sizeStr='clamp(18px, 3vw, 24px)' color='primary'>
                      Страховые компании:
                    </Text>
                    <S.WindowPartnersItems>
                      {data.partners.brokers.map((broker) => (
                        <ButtonLink
                          key={broker.UID}
                          label={broker.title}
                          href={broker.URL}
                          target='_blank'
                        />
                      ))}
                    </S.WindowPartnersItems>
                  </S.WindowPartnersWrap>
                )}
              </S.WindowPartners>
            </S.WindowDialog>
          </WindowDialog>
        </S.AboutDiploms>
      )}
    </>
  );
};

export default AboutDiploms;
