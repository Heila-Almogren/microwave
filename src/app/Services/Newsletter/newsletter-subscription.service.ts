import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsletterSubscriptionService {

  constructor(private http: HttpClient) {

  }

  public subscribeToNewsletter(subscriberEmail:string) : Observable<any> {

    let prod_url = "https://microwave-backend.herokuapp.com/newsletterSubscription"
    let dev_url = "http://localhost:9000/newsletterSubscription"

    let headers = {
      'Content-Type': '*',
      'Access-Control-Allow-Origin': '*'
    }

    return this.http.post(dev_url, {email: subscriberEmail})
  }


}
