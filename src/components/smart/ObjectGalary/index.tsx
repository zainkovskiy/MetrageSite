import React from 'react';
import { Galary } from '@zainkovskiy/image-carousel-simple';
import { IObjectGalary } from './type';
import * as S from './style';
import FlexBox from '../../ui/FlexBox';

const ObjectGalary = ({ images, onClose }: IObjectGalary) => {
  return (
    <S.ObjectGalary>
      <FlexBox jContent='flex-end'>
        <S.IconClose onClick={onClose} />
      </FlexBox>
      <Galary
        images={images.map((img) => ({
          url: img,
        }))}
        cover
      />
    </S.ObjectGalary>
  );
};

export default ObjectGalary;
