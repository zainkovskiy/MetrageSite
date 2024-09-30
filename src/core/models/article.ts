export interface IArticleSection {
  articles: IArticle[];
  sectionDescription: string;
  sectionId: number;
  sectionShemaType: string;
  sectionTitle: string;
}
export interface IArticle {
  UID: number;
  articleSchema: string;
  articleType: string;
  description: string;
  headline: string;
  image: string;
  modified: string;
  published: string;
}
export interface IArticleDetail {
  UID: number;
  articleSchema: string;
  body: IArticleBody[];
  canonical: string;
  description: string;
  headline: string;
  modified: string;
  published: string;
}
export interface IArticleBody {
  content: string | string[];
  order: number;
  props: string;
  type: string;
  context: 'title' | 'list' | 'text' | 'img';
}
