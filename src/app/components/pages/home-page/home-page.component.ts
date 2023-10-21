import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from "rxjs";
import {ArticlesService} from "../../../services/Articles/articles.service";
import {Apollo} from "apollo-angular";
import {Meta} from '@angular/platform-browser';
import {ArticleEntity} from "../../../types/models/Article";
import {ResponseState} from "../../../types/ResponseState";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  readonly ResponseState = ResponseState

  responseState: ResponseState = ResponseState.PENDING;
  articles: ArticleEntity[] = [];
  title: any = {};
  body: any = {};
  loading = true;
  errors: any;

  private latestArticlesSubscription: Subscription | undefined;

  constructor(private articlesService: ArticlesService,
              private apollo: Apollo,
              private metaTagService: Meta
  ) {
  }


  ngOnInit(): void {
    this.getLatestArticles()

  }

  private getLatestArticles() {
    this.latestArticlesSubscription = this.articlesService
      .getLatestArticles()
      .subscribe((articles: ArticleEntity[]) => {

          this.responseState = ResponseState.FULFILLED
          this.articles = articles;
          this.addMetaTags()

        },
        () => {
          this.responseState = ResponseState.ERROR
        })
  }

  private addMetaTags() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'ميكروويف, مدونة تقنية',
      },
      {name: 'title', property: "og:title", content: 'ميكرويف | Microwave'},
      {name: 'author', content: 'Heila Al-mogren'},
      {name: 'description', property: "og:description", content: 'المعلومة السريعة اللذيذة لمن لا يجيد طبخ التقنية!'},
      {
        name: 'image',
        property: "og:image",
        content: 'https://res.cloudinary.com/microwave/image/upload/v1653540600/Screen_Shot_2022-05-26_at_7.48.35_AM_alvmka.png'
      },
    ]);
  }

  ngOnDestroy(): void {
    if (this.latestArticlesSubscription) {
      this.latestArticlesSubscription.unsubscribe();
    }
  }

}
