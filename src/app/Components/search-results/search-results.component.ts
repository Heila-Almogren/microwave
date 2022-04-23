import { Component, OnInit } from '@angular/core';
import {firstValueFrom} from "rxjs";
import {ArticlesService} from "../../Services/Articles/articles.service";
import {TopArticlesExtractPipe} from "../../Pipes/TopArticlesExtract/top-articles-extract.pipe";
import {ActivatedRoute, ParamMap, Router, RouterEvent} from "@angular/router";
import {Article} from "../../Article";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {


  articles: any;

  constructor(private articlesService: ArticlesService,
              public pipe: TopArticlesExtractPipe,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {



    this.route.queryParamMap.subscribe(
      (params: ParamMap) => {

        firstValueFrom(
          this.articlesService.search_keyword(
            params.get('term') || ""))
          .then(res =>{
            this
              .articlesService
              .getArticlesByIDs(JSON.parse(res))
              .valueChanges
              .subscribe(res=> {
                  this.extractInfo(res)
                }
              )
          }
          )
      }
    );

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

}
