import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../components/inner-components/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LatestArticleComponent} from '../components/inner-components/latest-article/latest-article.component';
import {GraphQLModule} from "./graphql.module";
import {TopArticlesComponent} from '../components/inner-components/top-articles/top-articles.component';
import {TopArticleComponent} from '../components/inner-components/top-article/top-article.component';
import {ArticlePageComponent} from '../components/pages/article-page/article-page.component';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from '../components/pages/home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import {AllArticlesComponent} from '../components/pages/all-articles/all-articles.component';
import {AboutChefComponent} from '../components/pages/about-chef/about-chef.component';
import {ArticleListItemComponent} from '../components/inner-components/article-list-item/article-list-item.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  TopArticlesSkeletonComponent
} from '../components/inner-components/top-articles-skeleton/top-articles-skeleton.component';
import {PageNotFoundComponent} from '../components/pages/page-not-found/page-not-found.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {ArticlesListComponent} from '../components/inner-components/articles-list/articles-list.component';
import {SearchResultsComponent} from '../components/inner-components/search-results/search-results.component';
import {HeaderMenuComponent} from '../components/inner-components/header-menu/header-menu.component';
import {SearchInputComponent} from '../components/inner-components/search-input/search-input.component';
import { FooterComponent } from '../components/inner-components/footer/footer.component';
import {ApolloModule} from "apollo-angular";
import {NgxPaginationModule} from "ngx-pagination";
import { ErrorMessageComponent } from '../components/inner-components/error-message/error-message.component';
import {registerLocaleData} from "@angular/common";
import localeAr from '@angular/common/locales/ar';
registerLocaleData(localeAr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LatestArticleComponent,
    TopArticlesComponent,
    TopArticleComponent,
    ArticlePageComponent,
    HomePageComponent,
    AllArticlesComponent,
    AboutChefComponent,
    ArticleListItemComponent,
    TopArticlesSkeletonComponent,
    PageNotFoundComponent,
    ArticlesListComponent,
    SearchResultsComponent,
    HeaderMenuComponent,
    SearchInputComponent,
    FooterComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    GraphQLModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ApolloModule
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  providers:[
    { provide: LOCALE_ID, useValue: "ar-SA" }
  ]
})
export class AppModule {
}
