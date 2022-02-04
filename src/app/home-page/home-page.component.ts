import {Component, OnInit} from '@angular/core';
import {Article} from "../Article";
import {Subscription} from "rxjs";
import {ArticlesService} from "../articles.service";
import {Apollo} from "apollo-angular";
import MAIN_ARTICLES_QUERY from "../apollo/main_articles";
import {ApolloQueryResult} from "@apollo/client/core/types";
import {ArticleExtractPipe} from "../article-extract.pipe";
import {TopArticlesExtractPipe} from "../top-articles-extract.pipe";

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
              public pipe:TopArticlesExtractPipe
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
          let body =  this.pipe.transform(article, "article_body");
          let main_img = this.pipe.transform(article, "main_image");
          return new Article(id, slug, title, body, main_img);
        })
        // .split('/uploads/').join('http://localhost:1337/uploads/');

        this.loading = result.loading;
        this.errors = result.errors;


      });


  }

}
