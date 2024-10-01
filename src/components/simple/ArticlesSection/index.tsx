import React from 'react';
import { IArticleSection } from '../../../core/models/article';
import * as S from './style';
import ArticlesItem from '../ArticlesItem';

const ArticlesSection = (props: IArticleSection) => {
  const { sectionShemaType, sectionTitle, articles } = props;
  return (
    <S.ArticlesSection itemScope itemType={sectionShemaType}>
      <S.ArticlesSectionTitle itemProp='description'>
        {sectionTitle}
      </S.ArticlesSectionTitle>
      {articles.length > 0 && (
        <S.ArticlesSectionItems>
          {articles.map((article) => (
            <ArticlesItem {...article} key={article.UID} />
          ))}
        </S.ArticlesSectionItems>
      )}
    </S.ArticlesSection>
  );
};

export default ArticlesSection;
