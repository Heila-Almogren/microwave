import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../Article";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.css']
})
export class TopArticlesComponent implements OnInit {

  @Input("articles") articles: Article[] | undefined;

  constructor() {

  }

  ngOnInit(): void {

  }

}
