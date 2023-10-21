import {Component, Input} from '@angular/core';
import {Article} from "../../../types/models/Article";
import {environment} from "../../../../environments/environment";
import {ResponseState} from "../../../types/ResponseState";


@Component({
  selector: 'latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})

export class LatestArticleComponent {

  @Input("articleId") articleId: string | undefined;
  @Input("article") article: Article | undefined;
  @Input("responseState") responseState: ResponseState = ResponseState.PENDING;

  protected readonly environment = environment;
  protected readonly ResponseState = ResponseState;
}
