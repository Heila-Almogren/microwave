import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, mergeMap, retry} from 'rxjs/operators';
import {from, Observable, pipe} from "rxjs";
import {configvars} from "configvars.dev";
import {environment} from '../../environments/environment';
import {Apollo} from "apollo-angular";
import ARTICLE from "../GraphQLQueries/article";
import MAIN_ARTICLES_QUERY from "../GraphQLQueries/main_articles";


@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor(private http: HttpClient, private apolloClient: Apollo) {

  }

  getStrapiAPIKey(): Observable<any> {
    let dev_url = "https://microwave-backend.herokuapp.com/strapi_api_key"
    let local_url = "http://localhost:9000/strapi_api_key"

    let headers = {
      'Content-Type': '*',
      'Access-Control-Allow-Origin': '*'
    }

    return this.http.get(dev_url, {headers, 'responseType': 'text'})
  }

  // getAllArticles(): Observable<any> {
  //
  //
  //   return this.getStrapiAPIKey().pipe(mergeMap(res => {
  //
  //     let headers = {
  //       'Authorization': `Bearer ${res}`
  //     }
  //
  //     return this.http.get('http://localhost:1337/api/articles', {headers, 'responseType': 'text'})
  //   }))
  // }

getArticle(id:string):Observable<any>{

  return this.apolloClient
    .watchQuery<any>({
      query: ARTICLE,
      variables: {"id": id}
    })
    .valueChanges
}


getTopArticles():Observable<any>{
    return this.apolloClient
      .watchQuery<any[]>({
        query: MAIN_ARTICLES_QUERY
      })
      .valueChanges
}


}
