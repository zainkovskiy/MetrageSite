import React, { useEffect, useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import { getArticleDetail } from '../../../core/api/api';
import { Link, useParams } from 'react-router-dom';
import { IArticleBody, IArticleDetail } from '../../../core/models/article';
import FlexBox from '../../ui/FlexBox';
import ButtonLink from '../../ui/ButtonLink';
import Text from '../../ui/Text';
import moment from 'moment';

const ArticleDetailPage = () => {
  const params = useParams();
  const [article, setArticle] = useState<IArticleDetail | null>(null);

  useEffect(() => {
    getArticle();
  }, []);
  const getArticle = () => {
    if (params?.id) {
      getArticleDetail(params.id).then((articleDetail) => {
        if (articleDetail) {
          console.log(articleDetail);

          setArticle(articleDetail);
        }
      });
    }
  };
  if (!article) {
    return;
  }
  const getBodyComponent = (compoenent: IArticleBody) => {
    switch (compoenent.context) {
      case 'title':
        return (
          <S.ArticleDetailPageTitle as={compoenent.type} key={compoenent.order}>
            {compoenent.content}
          </S.ArticleDetailPageTitle>
        );
      case 'text':
        return (
          <S.ArticleDetailPageText
            $type={compoenent.type}
            key={compoenent.order}
            dangerouslySetInnerHTML={{ __html: compoenent.content }}
          />
        );
      case 'img':
        return (
          <S.ArticleDetailPageImg
            key={compoenent.order}
            src={
              typeof compoenent.content === 'string' ? compoenent.content : ''
            }
          />
        );
      case 'list':
        return (
          <S.ArticleDetailPageList
            key={compoenent.order}
            as={compoenent.type === 'numberList' ? 'ol' : 'ul'}
          >
            {Array.isArray(compoenent.content) &&
              compoenent.content.map((item) => (
                <S.ArticleDetailPageListItem key={item}>
                  {item}
                </S.ArticleDetailPageListItem>
              ))}
          </S.ArticleDetailPageList>
        );
      default:
        break;
    }
  };
  return (
    <CenterContainer>
      <PaddingSide>
        <S.ArticleDetailPageBread>
          <ButtonLink
            arrow='left'
            label='к списку'
            uppercase
            as={Link}
            to='/articles'
            color='primary'
          />
          <Text size={12} color='greyDark'>
            {moment(article.published).format('HH:mm DD.MM.YYYY')}
          </Text>
        </S.ArticleDetailPageBread>
        <S.ArticleDetailPage itemScope itemType={article.articleSchema}>
          <meta itemProp='headline' content={article.headline} />
          <S.ArticleDetailPageTitle itemProp='name'>
            {article.headline}
          </S.ArticleDetailPageTitle>
          <meta itemProp='url' content={window.location.href} />
          <link rel='canonical' href={article.canonical}></link>
          <meta itemProp='description' content={article.description} />
          <meta
            itemScope
            itemProp='mainEntityOfPage'
            itemType='https://schema.org/WebPage'
            itemID={article.canonical}
            content={article.headline}
          />
          <meta itemProp='datePublished' content={article.published} />
          <meta itemProp='dateModified' content={article.modified} />
          <meta itemProp='inLanguage' content='ru-RU' />
          <FlexBox column gap='1rem' itemProp='articleBody'>
            {article.body.length > 0 &&
              article.body.map((component) => {
                return getBodyComponent(component);
              })}
          </FlexBox>
          <div
            itemProp='publisher'
            itemScope
            itemType='https://schema.org/Organization'
          >
            <meta itemProp='name' content='Metrage Агентство недвижимости' />
            <meta itemProp='url' content='https://metragegroup.com' />
          </div>
        </S.ArticleDetailPage>
      </PaddingSide>
    </CenterContainer>
  );
};

export default ArticleDetailPage;
