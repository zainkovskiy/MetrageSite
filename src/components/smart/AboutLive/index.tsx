import React, { useState } from 'react';
import * as S from './style';
import { useAppSelector } from '../../../core/hooks/storeHook';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import WindowDialog from '../../ui/WindowDialog';
import FlexBox from '../../ui/FlexBox';

const AboutLive = () => {
  const { data } = useAppSelector((state) => state.about);
  const [photo, setPhoto] = useState<string | null>(null);
  const openPhoto = (image: string) => {
    setPhoto(image);
  };
  const closePhoto = () => {
    setPhoto(null);
  };
  return (
    <>
      {data?.diploms && data?.diploms.length > 0 && (
        <S.AboutLive>
          <S.AboutLiveText>
            <Text sizeStr='clamp(26px, 4vw, 44px)'>Жизнь компании</Text>
            <Text sizeStr='clamp(18px, 3vw, 24px)'>
              Регулярные экскурсии и презентации от застройщиков, банков,
              обучение риелторов юридическим и налоговым тонкостям — все для
              того, чтобы дать вам максимально полную информацию по вопросам
              недвижимости.
            </Text>
          </S.AboutLiveText>

          <S.AboutLiveItems>
            {data?.livePhotos.map((photo) => (
              <S.AboutLiveItem
                src={photo.URL}
                key={photo.UID}
                onClick={() => openPhoto(photo.URL)}
              />
            ))}
          </S.AboutLiveItems>
          <WindowDialog open={Boolean(photo)} black>
            {photo && (
              <S.WindowDialog>
                <S.ImageFull src={photo} />
                <S.IconClose onClick={closePhoto} />
              </S.WindowDialog>
            )}
          </WindowDialog>
        </S.AboutLive>
      )}
    </>
  );
};

export default AboutLive;
