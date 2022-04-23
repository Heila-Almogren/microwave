import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input("loading") loading: boolean | undefined;
  @Input("articles") articles: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
