import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ArticlesServiceService} from "./articles-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'microwave';
  test: any = "waiting..";


  constructor(private articlesServiceService: ArticlesServiceService) {
  }

  ngOnInit(): void {
    this.articlesServiceService.getAll().subscribe(result => {
        this.test = result
      },
      error => this.test = "ERROR: " + JSON.stringify(error));
  }
}
