import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../../../services/Articles/articles.service";
import {ArticleEntity} from "../../../types/models/Article";
import {ResponseState} from "../../../types/ResponseState";


@Component({
  selector: 'all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  readonly ResponseState = ResponseState

  page: number = 0;
  totalPages: number = 0;
  pageSize: number = 4;
  responseState: ResponseState = ResponseState.PENDING;
  articles: ArticleEntity[] = [];


  constructor(private articlesService: ArticlesService) {
  }


  ngOnInit(): void {

    this.getTotalArticlesCount()
    this.getBatch()
  }

  private getTotalArticlesCount() {
    this.articlesService
      .getAllArticlesCount()
      .subscribe((count: number) =>
        this.totalPages = count)
    {
    }
  }

  getBatch() {

    this.articlesService
      .getAllArticlesPaginated((this.page * 4) - 4)
      .subscribe((articles: ArticleEntity[]) => {
          this.responseState = ResponseState.FULFILLED
          this.articles = articles
        },
        () => {
          this.responseState = ResponseState.ERROR
        })
  }

  changePage(page: number) {
    this.page = page
    this.getBatch()
  }

}
