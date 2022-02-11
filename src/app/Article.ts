export class Article {
  id: string;
  slug: string;
  article_title: string;
  preamble: string;
  main_image: string;


  constructor(id: string, slug: string, article_title: string, preamble: string, main_image: string) {
    this.id = id;
    this.slug = slug;
    this.article_title = article_title;
    this.preamble = preamble;
    this.main_image = main_image;
  }

}

