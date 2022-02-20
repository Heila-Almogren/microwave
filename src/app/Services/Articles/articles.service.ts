import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Apollo, QueryRef} from "apollo-angular";
import ARTICLE from "../../GraphQLQueries/article";
import MAIN_ARTICLES_QUERY from "../../GraphQLQueries/main_articles";
import ALL_ARTICLES from "../../GraphQLQueries/all_articles";
import Articles_ids from "../../GraphQLQueries/articles_ids";
import {resolve} from "@angular/compiler-cli";


@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor(private http: HttpClient, private apolloClient: Apollo) {

  }

  getStrapiAPIKey(): Observable<any> {
    let prod_url = "https://microwave-backend.herokuapp.com/strapi_api_key"
    let dev_url = "http://localhost:9000/strapi_api_key"

    let headers = {
      'Content-Type': '*',
      'Access-Control-Allow-Origin': '*'
    }

    return this.http.get(prod_url, {headers, 'responseType': 'text'})
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

  getArticle(id: string): Observable<any> {


    return this.apolloClient
      .watchQuery<any>({
        query: ARTICLE,
        variables: {"id": id}
      })
      .valueChanges
  }


  getTopArticles(): Observable<any> {


    return this.apolloClient
      .watchQuery<any[]>({
        query: MAIN_ARTICLES_QUERY
      })
      .valueChanges
  }


  getAllArticlesIDs(): Observable<any> {



    return this.apolloClient
      .watchQuery<article_model>({
        query: Articles_ids
      })
      .valueChanges


  }

  getCount = new Promise<number>((resolve, reject)=>{


    this.apolloClient
      .watchQuery<article_model>({
        query: Articles_ids,
      })
      .valueChanges
      .subscribe(res=>{

        resolve(res.data.articles.data.length);
      })


  })


  getArticlesPaginated(): QueryRef<any> {

    return this.apolloClient
      .watchQuery<any[]>({
        query: ALL_ARTICLES,
        variables: {
          offset: 0
        },
        fetchPolicy: 'cache-first',
      })

  }

}


export class article {
  data: any[];

  constructor(data: any[]) {
    this.data = data;
  }
}


export class article_model {
  articles: article;

  constructor(articles: article) {
    this.articles = articles;
  }
}
