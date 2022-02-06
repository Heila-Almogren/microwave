import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "./Components/article-page/article-page.component";
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./Components/home-page/home-page.component";


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "article/:id", component: ArticlePageComponent}
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
