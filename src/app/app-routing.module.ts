import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "./Components/article-page/article-page.component";
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {AllArticlesComponent} from "./Components/all-articles/all-articles.component";
import {AboutChefComponent} from "./about-chef/about-chef.component";


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "article/:id", component: ArticlePageComponent},
  {path: "articles", component: AllArticlesComponent},
  {path: "about-chef", component: AboutChefComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
