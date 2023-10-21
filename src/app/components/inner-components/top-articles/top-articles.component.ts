import {Component, Input} from '@angular/core';
import {ArticleEntity} from "../../../types/models/Article";
import {ResponseState} from "../../../types/ResponseState";

@Component({
  selector: 'top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.css']
})
export class TopArticlesComponent {

  @Input("articles") articles: ArticleEntity[] | undefined;
  @Input("responseState") responseState: ResponseState = ResponseState.PENDING;

  protected readonly ResponseState = ResponseState;
}
