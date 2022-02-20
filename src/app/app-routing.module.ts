import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "./Components/article-page/article-page.component";
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {AllArticlesComponent} from "./Components/all-articles/all-articles.component";
import {AboutChefComponent} from "./Components/about-chef/about-chef.component";
import {SideMenuComponent} from "./Components/side-menu/side-menu.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomePageComponent, data: {animation: 'home'}},
  {path: "article/:id", component: ArticlePageComponent, data: {animation: 'article'}},
  {path: "articles", component: AllArticlesComponent, data: {animation: 'articles'}},
  {path: "about-chef", component: AboutChefComponent, data: {animation: 'about-chef'}},
  {path: "side-menu", component: SideMenuComponent, data: {animation: 'side-menu'}},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
