export class Article {
  id: string;
  slug: string;
  article_title: string;
  article_body: string;
  main_image: string;

  constructor(id: string, slug: string, article_title: string, article_body: string, main_image: string) {
    this.id = id;
    this.slug = slug;
    this.article_title = article_title;
    this.article_body = article_body;
    this.main_image = main_image;
  }

}

