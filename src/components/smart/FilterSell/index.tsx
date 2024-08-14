import React from 'react';
import * as S from './style';
import Button from '../../ui/Button';
import FlexBox from '../../ui/FlexBox';
import InputWithBox from '../../ui/InputWithBox';
import Text from '../../ui/Text';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
const FilterSell = () => {
  return (
    <S.FilterSell>
      <Text bold size={16}>
        Получите бесплатную консультацию по продаже или{' '}
        <ButtonLink
          as={Link}
          to='/sell'
          label='подайте объявление'
          bold
          color='primaryLite'
          size={16}
        />
      </Text>
      <S.FilterBuyInputs>
        <InputWithBox placeholder='Земельные участки' />
        <InputWithBox placeholder='+7___-___-__-__' />
        <Button disabled>Перезвоните мне</Button>
      </S.FilterBuyInputs>
    </S.FilterSell>
  );
};

export default FilterSell;
