import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import ARTICLE from "../../GraphQLQueries/article";
import {Apollo} from "apollo-angular";
import ABOUT_CHEF from "../../GraphQLQueries/about-chef";

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  constructor(private apolloClient: Apollo) { }


  getSummary(): Observable<any> {

    return this.apolloClient
      .watchQuery<any>({
        query: ABOUT_CHEF,

      })
      .valueChanges
  }

  getSocialLinks(): Observable<any> {

      return this.apolloClient
        .watchQuery<any>({
          query: ABOUT_CHEF,

        })
        .valueChanges

  }


}
