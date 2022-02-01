import {Component, OnInit} from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";
import {Subscription} from "rxjs";
import MAIN_ARTICLE_QUERY from "../apollo/main_article";

@Component({
  selector: 'latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})

export class LatestArticleComponent implements OnInit {
  data: any = {};
  title: any = {};
  main_img: any = {};
  body: any = {};
  loading = true;
  errors: any;


  private latestArticle: Subscription | undefined;


  constructor(private apollo: Apollo) {

  }

  ngOnInit(): void {
    this.latestArticle = this.apollo
      .watchQuery({
        query: MAIN_ARTICLE_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        console.log(JSON.stringify(result.data))

        this.title = this.data["articles"]["data"][0]["attributes"]["article_title"]
        this.body = (this.data["articles"]["data"][0]["attributes"]["article_body"])
          .replace(/<[^>]*>/g, "")
          // .split('/uploads/').join('http://localhost:1337/uploads/');
          .substring(0, 100) + "..."
        this.main_img = "http://localhost:1337"+ this.data["articles"]["data"][0]["attributes"]["main_image"]["data"]["attributes"]["url"]

        this.loading = result.loading;
        this.errors = result.errors;
      });
  }


}
