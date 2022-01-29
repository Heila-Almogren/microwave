import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, retry} from 'rxjs/operators';
import {from, Observable} from "rxjs";
import {configvars} from "configvars.dev";
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ArticlesServiceService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    let url = "https://microwave-backend.herokuapp.com/strapi_api_key"
    let headers= {
      'Content-Type': '*',
      'Access-Control-Allow-Origin':'*'
    }
    return this.http.get(url, {headers})
  }


}
