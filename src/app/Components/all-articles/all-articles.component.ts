import {Component, Input, OnInit} from '@angular/core';

import gql from "graphql-tag";

import {Apollo} from "apollo-angular";
import {ArticlesService} from "../../Services/Articles/articles.service";
import {Article} from "../../Article";
import {TopArticlesExtractPipe} from "../../Pipes/TopArticlesExtract/top-articles-extract.pipe";
import {filter, firstValueFrom, pairwise, Subscription} from "rxjs";
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";


@Component({
  selector: 'all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {




  //pagination stuff

  page: number = 0;
  totalPages: number = 0;
  pageSize: number = 4;

  //articles list
  articles: any[] | undefined;

  //promises & subs
  PaginatedArticlesPromise: Promise<any> | undefined;
  ArticlesTotalLengthPromise: Promise<any> | undefined


  constructor(private articlesService: ArticlesService,
              public pipe: TopArticlesExtractPipe,
              private route: ActivatedRoute
  ) {


    // Define Promises
    this.PaginatedArticlesPromise =


        firstValueFrom(
          this.articlesService
            .getArticlesPaginated()
            .valueChanges
        )

    this.ArticlesTotalLengthPromise = this.articlesService
      .getCount
  }


  ngOnInit(): void {

    Promise.all(
      [this.ArticlesTotalLengthPromise]
    ).then(results => {
      this.totalPages = results[0]
    })
  }


  getMore = () => {
    this.articles = undefined;

    this.articlesService
      .getArticlesPaginated()
      .fetchMore({
        variables: {
          offset: (this.page * 4) - 4
        }
      })
      .then(res => {
        this.extractInfo(res)
      })


  }

  changePage() {
    this.getMore()
  }

  extractInfo = (result: any) => {

    let res: any[] = result["data"]["articles"]["data"];

    this.articles = res.map(article => {
      let id = this.pipe.transform(article, "id");
      let slug = this.pipe.transform(article, "slug");
      let title = this.pipe.transform(article, "article_title");
      let preamble = this.pipe.transform(article, "preamble");
      let main_img = this.pipe.transform(article, "main_image");
      return new Article(id, slug, title, preamble, main_img);
    })
  }

  // is_search_page(): boolean {
  //   return (location.pathname.split("?")[0] === "/search")
  // }
}
