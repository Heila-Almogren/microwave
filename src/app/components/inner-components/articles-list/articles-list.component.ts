import {Component, Input, OnInit} from '@angular/core';
import {ArticleEntity} from "../../../types/models/Article";
import {PaginatePipeArgs} from "ngx-pagination/lib/paginate.pipe";

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input("loading") loading: boolean | undefined;
  @Input("articles") articles: ArticleEntity[] = [];
  @Input("pagination") pagination: PaginatePipeArgs = { };

  constructor() {
  }

  ngOnInit(): void {
  }

}
