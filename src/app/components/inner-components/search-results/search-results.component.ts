import {Component, OnInit} from '@angular/core';
import {firstValueFrom} from "rxjs";
import {ArticlesService} from "../../../services/Articles/articles.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ArticleEntity} from "../../../types/models/Article";


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {


  articles: ArticleEntity[] = [];

  constructor(private articlesService: ArticlesService,
              private route: ActivatedRoute,) {

  }

  ngOnInit(): void {


    this.route.queryParamMap.subscribe(
      (params: ParamMap) => {

        firstValueFrom(
          this.articlesService.SearchArticleByKeyword(
            params.get('term') || ""))
          .then((articleEntities: ArticleEntity[]) => {
              this.articles = articleEntities
            }
          )
      }
    );

  }

}
