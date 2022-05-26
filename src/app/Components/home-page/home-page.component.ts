import {Component, OnInit} from '@angular/core';
import {Article} from "../../Article";
import {Subscription} from "rxjs";
import {ArticlesService} from "../../Services/Articles/articles.service";
import {Apollo} from "apollo-angular";
import MAIN_ARTICLES_QUERY from "../../GraphQLQueries/main_articles";
import {ApolloQueryResult} from "@apollo/client/core/types";
import {ArticleExtractPipe} from "../../Pipes/ArticleExtract/article-extract.pipe";
import {TopArticlesExtractPipe} from "../../Pipes/TopArticlesExtract/top-articles-extract.pipe";
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  data: Article[] = [];
  title: any = {};
  main_img: any = {};
  body: any = {};
  loading = true;
  errors: any;
  state: any;

  private latestArticles: Subscription | undefined;
  allArticles: Article[] | undefined;

  constructor(private articlesService: ArticlesService,
              private apollo: Apollo,
              public pipe:TopArticlesExtractPipe,
              private metaTagService: Meta
  ) {
  }


  ngOnInit(): void {

    this.articlesService
      .getTopArticles()
      .subscribe((result: ApolloQueryResult<any>) => {



          let res: any[] = result["data"]["articles"]["data"];

          this.data = res.map(article => {
            let id = this.pipe.transform(article, "id");
            let slug = this.pipe.transform(article, "slug");
            let title = this.pipe.transform(article, "article_title");
            let preamble =  this.pipe.transform(article, "preamble");
            let main_img = this.pipe.transform(article, "main_image");
            return new Article(id, slug, title, preamble, main_img);
          })
          // .split('/uploads/').join('http://localhost:1337/uploads/');

        this.metaTagService.addTags([
          {
            name: 'keywords',
            content: 'ميكروويف, مدونة تقنية',
          },
          { name: 'title', property:"og:title", content: 'ميكرويف | Microwave' },
          { name: 'author', content: 'Heila Al-mogren' },
          { name: 'description', property:"og:description", content: 'المعلومة السريعة اللذيذة لمن لا يجيد طبخ التقنية!' },
          { name: 'image', property:"og:image", content: 'https://res.cloudinary.com/microwave/image/upload/v1653540600/Screen_Shot_2022-05-26_at_7.48.35_AM_alvmka.png' },
        ]);

          this.loading = result.loading;
          this.errors = result.errors;
      });




  }

}
