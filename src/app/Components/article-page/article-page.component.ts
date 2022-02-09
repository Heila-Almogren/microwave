import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Apollo} from "apollo-angular";
import ARTICLE from "../../GraphQLQueries/article";
import {ActivatedRoute, NavigationStart} from "@angular/router";
import {Article} from "../../Article";
import {ArticlesService} from "../../Services/Articles/articles.service";
import {ArticleExtractPipe} from "../../Pipes/ArticleExtract/article-extract.pipe";

@Component({
  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  article: any;
  title: string | undefined;
  body: string | undefined;
  private articleSubscription: Subscription | undefined;


  constructor(private apollo: Apollo, private route: ActivatedRoute,
              private articlesService: ArticlesService,
              public pipe:ArticleExtractPipe
              ) {
  }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id')
    this.articleSubscription = this.articlesService.getArticle(id || "0")
      .subscribe(res => {

        this.title = this.pipe.transform(res, "article_title")
         this.body = this.pipe.transform(res, "article_body")
        console.log(res)
      })

  }

}
