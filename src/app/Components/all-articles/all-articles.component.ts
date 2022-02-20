import {Component, OnInit} from '@angular/core';

import gql from "graphql-tag";

import {Apollo} from "apollo-angular";
import {ArticlesService} from "../../Services/Articles/articles.service";
import {Article} from "../../Article";
import {TopArticlesExtractPipe} from "../../Pipes/TopArticlesExtract/top-articles-extract.pipe";
import {Subscription} from "rxjs";


@Component({
  selector: 'all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  //pagination stuff
  currentOffset: number;
  page: number = 0;
  totalPages: number = 0;
  pageSize: number = 4;

  //articles list
  articles: any[] = [];

  //promises & subs
  PaginatedArticlesPromise: Subscription;
  ArticlesTotalLengthPromise: Promise<any> | undefined


  constructor(private articlesService: ArticlesService,
              public pipe: TopArticlesExtractPipe) {

    // Init current offset to zero
    this.currentOffset = 0;

    // Define Promises
    this.PaginatedArticlesPromise = this.articlesService
      .getArticlesPaginated()
      .valueChanges
      .subscribe(res => this.extractInfo(res)
      )

    this.ArticlesTotalLengthPromise = this.articlesService
      .getCount
  }


  ngOnInit(): void {
    console.log("Initially, offset is "+ this.currentOffset)

    // Call for first batch
    Promise.all(
      [this.PaginatedArticlesPromise, this.ArticlesTotalLengthPromise]
    ).then(results => {



      this.totalPages = results[1]
      console.log("Total Pages is "+ this.totalPages)
      console.log("Fetched first batch, offset is "+ this.currentOffset)
    })


  }


  getMore = () => {

    this.articlesService
      .getArticlesPaginated()
      .fetchMore({
        variables: {
          offset: this.currentOffset
        }
      })
      .then(res => {
        console.log("Fetched More, offset is "+ this.currentOffset)
        this.currentOffset = this.page * 4 + 1;
        this.extractInfo(res)


      })
  }

  changePage() {


    console.log("Page changed, offset is "+ this.currentOffset)
    this.getMore()
  }

  extractInfo = (result: any) => {
    console.log("Extracting Info and resetting list")
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
}
