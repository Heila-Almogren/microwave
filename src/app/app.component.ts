import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ArticlesServiceService} from "./articles-service.service";

class Article {
  title: string;
  body: string;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'microwave';
  articles: any[] = [];
  fetchResult = "Waiting";


  constructor(private articlesServiceService: ArticlesServiceService) {
  }

  ngOnInit(): void {
    this.articlesServiceService.getAllArticles()
      .subscribe(result => {
          result = JSON.parse(result);
          this.articles = result["data"][0]["attributes"]["articlebody"]

          this.fetchResult = "";
        },
        error => this.fetchResult = "ERROR: " + JSON.stringify(error));
  }
}
