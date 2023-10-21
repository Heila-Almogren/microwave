import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "../components/pages/article-page/article-page.component";
import {HomePageComponent} from "../components/pages/home-page/home-page.component";
import {AllArticlesComponent} from "../components/pages/all-articles/all-articles.component";
import {AboutChefComponent} from "../components/pages/about-chef/about-chef.component";
import {PageNotFoundComponent} from "../components/pages/page-not-found/page-not-found.component";
import {SearchResultsComponent} from "../components/inner-components/search-results/search-results.component";


export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'articles', component: AllArticlesComponent},
  {path: 'about-chef', component: AboutChefComponent},
  {path: 'search', component: SearchResultsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
