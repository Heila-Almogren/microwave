import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainBannerComponent } from './Components/main-banner/main-banner.component';
import { LatestArticleComponent } from './Components/latest-article/latest-article.component';
import {GraphQLModule} from "./graphql.module";
import { TopArticlesComponent } from './Components/toparticles/top-articles.component';
import { NewsletterSubscriptionComponent } from './Components/newsletter-subscribtion/newsletter-subscription.component';
import { TopArticleComponent } from './Components/top-article/top-article.component';
import { ArticlePageComponent } from './Components/article-page/article-page.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ArticleExtractPipe } from './Pipes/ArticleExtract/article-extract.pipe';
import { TopArticlesExtractPipe } from './Pipes/TopArticlesExtract/top-articles-extract.pipe';
import {FormsModule} from "@angular/forms";
import { AllArticlesComponent } from './Components/all-articles/all-articles.component';
import { AboutChefComponent } from './Components/about-chef/about-chef.component';
import { ArticleListItemComponent } from './Components/article-list-item/article-list-item.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TopArticlesSkeletonComponent } from './Components/top-articles-skeleton/top-articles-skeleton.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { DateLocalizerPipe } from './date-localizer.pipe';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {AppRoutingModule, routes} from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { ArticlesListComponent } from './Components/articles-list/articles-list.component';
import { SearchResultsComponent } from './Components/search-results/search-results.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    LatestArticleComponent,
    TopArticlesComponent,
    NewsletterSubscriptionComponent,
    TopArticleComponent,
    ArticlePageComponent,
    HomePageComponent,
    ArticleExtractPipe,
    TopArticlesExtractPipe,
    AllArticlesComponent,
    AboutChefComponent,
    ArticleListItemComponent,
    SideMenuComponent,
    TopArticlesSkeletonComponent,
    DateLocalizerPipe,
    NotfoundComponent,
    ArticlesListComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    GraphQLModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [ArticleExtractPipe, TopArticlesExtractPipe],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
