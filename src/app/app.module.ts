import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import {GraphQLModule} from "./graphql.module";
import { TopArticlesComponent } from './toparticles/top-articles.component';
import { NewsletterSubscriptionComponent } from './newsletter-subscribtion/newsletter-subscription.component';
import { TopArticleComponent } from './top-article/top-article.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import { ArticleExtractPipe } from './article-extract.pipe';
import { TopArticlesExtractPipe } from './top-articles-extract.pipe';

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
    TopArticlesExtractPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    GraphQLModule
  ],
  providers: [ArticleExtractPipe, TopArticlesExtractPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
