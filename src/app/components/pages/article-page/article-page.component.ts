import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {Apollo} from "apollo-angular";
import {ActivatedRoute, NavigationStart} from "@angular/router";
import {ArticlesService} from "../../../services/Articles/articles.service";
import { Meta} from "@angular/platform-browser";
import {Article, ArticleEntity} from "../../../types/models/Article";

@Component({
  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
})
export class ArticlePageComponent implements OnInit {

  article: Article | undefined;


  private articleSubscription: Subscription | undefined;


  constructor(private apollo: Apollo, private route: ActivatedRoute,
              private articlesService: ArticlesService,
              private metaTagService: Meta
  ) {
  }

  ngOnInit(): void {

    let id:string | null = this.route.snapshot.paramMap.get('id')

    if(id){
      this.loadArticle(id)
    }


  }

  private loadArticle(articleId: string):void{

    this.articleSubscription = this.articlesService.getArticleById(articleId)
      .subscribe((article:ArticleEntity) => {
        this.article = article.attributes
        this.loadMetaTags()
      })
  }

  private loadMetaTags(){
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: this.article?.keywords || "",
      },
      { name: 'title', property:"og:title", content: this.article?.article_title || "" },
      { name: 'description', property:"og:description", content: this.article?.preamble?.replace(/<[^>]*>/g, "").substring(0, 100) + "..." || "" },
      { name: 'image', property:"og:image", content: this.article?.main_image.data.attributes.url || "" },
      { name: 'author', content: 'Heila Al-Mogren' },
    ]);
  }
}
