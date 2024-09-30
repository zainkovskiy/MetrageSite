import React, { useEffect } from 'react';
import * as S from './style';
import { getArticlesList } from '../../../core/store/slices/articlesSlice';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import ArticlesSection from '../../simple/ArticlesSection';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const { sections } = useAppSelector((state) => state.articles);

  useEffect(() => {
    getAticles();
  }, []);
  const getAticles = () => {
    dispatch(getArticlesList());
  };
  return (
    <S.ArticlesPage>
      <CenterContainer>
        <PaddingSide>
          {sections.map((section) => (
            <ArticlesSection {...section} key={section.sectionId} />
          ))}
        </PaddingSide>
      </CenterContainer>
    </S.ArticlesPage>
  );
};

export default ArticlesPage;
