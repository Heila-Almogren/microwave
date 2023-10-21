import {Injectable} from "@angular/core";
import {HttpClient,} from "@angular/common/http";
import {from, Observable, tap} from "rxjs";
import {Apollo,} from "apollo-angular";
import {
  GET_ARTICLE_BY_ID,
  LATEST_ARTICLES_QUERY,
  ALL_ARTICLES_QUERY,
  ALL_ARTICLES_IDS,
  SEARCH_ARTICLES_BY_KEYWORD
} from "../../types/GraphQLQueries";
import {ApolloQueryResult} from "@apollo/client/core/types";
import {map} from 'rxjs/operators';
import {
  ArticleEntity,
  ArticleEntityResponse,
  ArticleEntityResponseCollection
} from "../../types/models/Article";
import {QueryResponseWrapper} from "../../types/QueryResponseWrapper";


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient, private apolloClient: Apollo) {}

  getArticleById(id: string): Observable<ArticleEntity> {

    return this.apolloClient
      .watchQuery<QueryResponseWrapper<ArticleEntityResponse>>({
        query: GET_ARTICLE_BY_ID,
        variables: {"id": id},
        errorPolicy: 'all',
      })
      .valueChanges
      .pipe(
        map((res: ApolloQueryResult<QueryResponseWrapper<ArticleEntityResponse>>) => res.data["article"].data))
  }


  getLatestArticles(max: number = 4) {

    return this.apolloClient
      .watchQuery<QueryResponseWrapper<ArticleEntityResponseCollection>>({
        query: LATEST_ARTICLES_QUERY,
        variables: {"max": max},
        errorPolicy: 'all'
      })
      .valueChanges
      .pipe(
        map((res: ApolloQueryResult<QueryResponseWrapper<ArticleEntityResponseCollection>>) => res.data["articles"].data))
  }

  getAllArticlesPaginated(fetchMoreOffset: number = 0) {

    return from(this.apolloClient
      .watchQuery<QueryResponseWrapper<ArticleEntityResponseCollection>>({
        query: ALL_ARTICLES_QUERY,
        variables: {
          offset: 0
        },
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      })
      .fetchMore({
        variables: {
          offset: fetchMoreOffset
        }
      }))
      .pipe(
        map((res: ApolloQueryResult<QueryResponseWrapper<ArticleEntityResponseCollection>>) => res.data["articles"].data))

  }

  getAllArticlesCount(): Observable<number> {

    return this.apolloClient
      .watchQuery<QueryResponseWrapper<ArticleEntityResponseCollection>>({
        query: ALL_ARTICLES_IDS,
        errorPolicy: 'all',
      })
      .valueChanges
      .pipe(
        map((res: ApolloQueryResult<QueryResponseWrapper<ArticleEntityResponseCollection>>) => res.data["articles"].data.length))
  }

  SearchArticleByKeyword(keyword: string): Observable<ArticleEntity[]> {

    return this.apolloClient
      .watchQuery<QueryResponseWrapper<ArticleEntityResponseCollection>>({
        query: SEARCH_ARTICLES_BY_KEYWORD,
        variables: {
          "filters": {"keywords": {"contains": keyword}}
        },
        errorPolicy: 'all',
      })
      .valueChanges
      .pipe(
        map((res: ApolloQueryResult<QueryResponseWrapper<ArticleEntityResponseCollection>>) => res.data["articles"].data))
  }

}

// let headers = {
//   'Content-Type': '*',
//   'Access-Control-Allow-Origin': '*'
// }
//
// return this.http.get(environment.BackendServerURL+"/search", {headers, 'responseType': 'text', params: new HttpParams().set('term', term || "")})


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
// getStrapiAPIKey(): Observable<any> {
//
//   let headers = {
//     'Content-Type': '*',
//     'Access-Control-Allow-Origin': '*'
//   }
//
//   return this.http.get(environment.BackendServerURL + "/strapi_api_key", {headers, 'responseType': 'text'})
// }
