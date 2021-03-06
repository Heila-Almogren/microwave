import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "./Components/article-page/article-page.component";
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./Components/home-page/home-page.component";
import {AllArticlesComponent} from "./Components/all-articles/all-articles.component";
import {AboutChefComponent} from "./Components/about-chef/about-chef.component";
import {SideMenuComponent} from "./Components/side-menu/side-menu.component";
import {NotfoundComponent} from "./Components/notfound/notfound.component";
import {SearchResultsComponent} from "./Components/search-results/search-results.component";


export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'articles', component: AllArticlesComponent},
  {path: 'about-chef', component: AboutChefComponent},
  {path: 'side-menu', component: SideMenuComponent},
  {path: 'search', component: SearchResultsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
  ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
