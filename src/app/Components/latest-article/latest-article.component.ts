import {Component, Input, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Subscription} from "rxjs";
import MAIN_ARTICLES_QUERY from "../../GraphQLQueries/main_articles";
import {Article} from "../../Article";

@Component({
  selector: 'latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})

export class LatestArticleComponent implements OnInit {



@Input("article") article: Article | undefined;


  constructor() {

  }

  ngOnInit(): void {
console.log(JSON.stringify(this.article))
  }


}
