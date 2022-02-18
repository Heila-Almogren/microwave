import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../Article";

@Component({
  selector: 'top-article',
  templateUrl: './top-article.component.html',
  styleUrls: ['./top-article.component.css']
})
export class TopArticleComponent implements OnInit {
  @Input("article") article: Article | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
