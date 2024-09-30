import React from 'react';
import { IArticle } from '../../../core/models/article';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const ArticlesItem = (props: IArticle) => {
  const navigate = useNavigate();

  const {
    UID,
    headline,
    articleType,
    articleSchema,
    modified,
    published,
    description,
  } = props;
  const toArticleDetail = () => {
    navigate(`${UID}`);
  };
  return (
    <S.ArticlesItem
      itemProp={articleType}
      itemScope
      itemType={articleSchema}
      onClick={toArticleDetail}
    >
      <S.ArticlesItemTitle>{headline}</S.ArticlesItemTitle>
      <meta itemProp='description' content={description} />
      <meta itemProp='datePublished' content={published} />
      <meta itemProp='dateModified' content={modified} />
      <meta itemProp='author' content='Metrage Агентство недвижимости' />
      <S.ArticlesItemDescription>{description}</S.ArticlesItemDescription>
    </S.ArticlesItem>
  );
};

export default ArticlesItem;
