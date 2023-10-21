import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import GET_ARTICLE_BY_ID from "../../types/GraphQLQueries/get-article-by-id.query";
import {Apollo} from "apollo-angular";
import ABOUT_CHEF from "../../types/GraphQLQueries/about-chef.query";
import {QueryResponseWrapper} from "../../types/QueryResponseWrapper";
import {AboutChefEntityResponse} from "../../types/models/AboutChef";
import {map} from "rxjs/operators";
import {ApolloQueryResult} from "@apollo/client/core/types";
import {ArticleEntityResponseCollection} from "../../types/models/Article";

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  constructor(private apolloClient: Apollo) { }


  getSummary(): Observable<string> {

    return this.apolloClient
      .watchQuery<QueryResponseWrapper<AboutChefEntityResponse>>({
        query: ABOUT_CHEF,
      })
      .valueChanges
      .pipe(map((res: ApolloQueryResult<QueryResponseWrapper<AboutChefEntityResponse>>) => res.data["aboutChef"].data.attributes.summary))
  }

  getSocialLinks(): Observable<any> {

      return this.apolloClient
        .watchQuery<any>({
          query: ABOUT_CHEF,

        })
        .valueChanges

  }


}
