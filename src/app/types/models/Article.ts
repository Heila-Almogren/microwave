export interface ArticleEntityResponse {
  data: ArticleEntity
}

export interface ArticleEntityResponseCollection{
  data: ArticleEntity[]
}

export interface ArticleEntity {
  id: string;
  attributes: Article
}

export interface Article {
  article_title: string;
  preamble: string;
  article_body: string;
  publish_date: string;
  main_image: Image,
  keywords: string
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  attributes: MainImageAttributes;
}

export interface MainImageAttributes {
  url: string;
}
