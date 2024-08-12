import React, { useState } from 'react';
import * as S from './style';
import { scroll } from 'framer-motion';
import { navVariants } from './animate';
import ButtonLink from '../../ui/ButtonLink';
import { Link } from 'react-router-dom';
import FlexBox from '../../ui/FlexBox';
import CenterContainer from '../../containers/CenterContainer';
import Button from '../../ui/Button';

const Nav = () => {
  const [isVisibleBack, setIsVisibleBack] = useState(false);
  scroll(
    (progress) => {
      if (progress > 0) {
        setIsVisibleBack(true);
        return;
      }
      setIsVisibleBack(false);
    },
    { axis: 'y' }
  );

  return (
    <S.Nav
      animate={isVisibleBack ? 'visible' : 'invisible'}
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <CenterContainer>
        <S.NavWrapper>
          <FlexBox gap='20px'>
            <ButtonLink label='Купить' as={Link} to='/buy' isMatch uppercase />
            <ButtonLink
              label='Продать'
              as={Link}
              to='/sell'
              isMatch
              uppercase
            />
            <ButtonLink
              label='Ипотека'
              as={Link}
              to='/mortgage'
              isMatch
              uppercase
            />
          </FlexBox>
          <Button>default</Button>
          <Button variant='outline'> outline</Button>
          <FlexBox gap='20px'>
            <ButtonLink
              label='Сервисы'
              as={Link}
              to='/services'
              isMatch
              uppercase
            />
            <ButtonLink
              label='Передать клиента'
              uppercase
              href='https://crm.metragegroup.com/'
            />
            <ButtonLink
              label='8-800-222-85-28'
              uppercase
              href='tel:8-800-222-85-28'
            />
          </FlexBox>
        </S.NavWrapper>
      </CenterContainer>
    </S.Nav>
  );
};
export default Nav;
