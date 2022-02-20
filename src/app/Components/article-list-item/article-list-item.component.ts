import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../Article";

@Component({
  selector: 'article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {

  @Input("article") article: Article | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
