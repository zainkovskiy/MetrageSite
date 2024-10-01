import React from 'react';
import { IArticle } from '../../../core/models/article';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import aroundUrl from '../../../assets/images/mainAround.svg';
import crossUrl from '../../../assets/images/mainCross.svg';
import arrowUrl from '../../../assets/images/mainArrow.svg';
import semiconUrl from '../../../assets/images/semicolon.svg';
import moment from 'moment';
const arrIcons = [aroundUrl, crossUrl, arrowUrl, semiconUrl];
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
      $image={arrIcons[Math.floor(Math.random() * 3)]}
    >
      <S.ArticlesItemTitle itemProp='headline'>{headline}</S.ArticlesItemTitle>
      <meta itemProp='description' content={description} />
      <meta itemProp='datePublished' content={published} />
      <meta itemProp='dateModified' content={modified} />
      <meta itemProp='author' content='Metrage Агентство недвижимости' />
      <S.ArticlesItemDescription>{description}</S.ArticlesItemDescription>
      <S.ArticlesItemDate>
        {moment(published).format('DD.MM.YYYY HH:mm')}
      </S.ArticlesItemDate>
    </S.ArticlesItem>
  );
};

export default ArticlesItem;
